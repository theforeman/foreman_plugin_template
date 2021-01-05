module ForemanPluginTemplate
  class Engine < ::Rails::Engine
    isolate_namespace ForemanPluginTemplate
    engine_name 'foreman_plugin_template'

    config.autoload_paths += Dir["#{config.root}/app/controllers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/helpers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/models/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/overrides"]

    # Add any db migrations
    initializer 'foreman_plugin_template.load_app_instance_data' do |app|
      ForemanPluginTemplate::Engine.paths['db/migrate'].existent.each do |path|
        app.config.paths['db/migrate'] << path
      end
    end

    initializer 'foreman_plugin_template.register_plugin', :before => :finisher_hook do |_app|
      Foreman::Plugin.register :foreman_plugin_template do
        requires_foreman '>= 2.4.0'

        # Add Global files for extending foreman-core components and routes
        register_global_js_file 'global'

        # Add permissions
        security_block :foreman_plugin_template do
          permission :view_foreman_plugin_template, { :'foreman_plugin_template/hosts' => [:new_action],
                                                      :'foreman_plugin_template/react' => [:index] }
        end

        # Add a new role called 'Discovery' if it doesn't exist
        role 'ForemanPluginTemplate', [:view_foreman_plugin_template]

        # add menu entry
        sub_menu :top_menu, :plugin_template, :icon => 'pficon pficon-enterprise', :caption=> N_('Plugin Template'), :after => :hosts_menu do
          menu :top_menu, :react_page, :caption => N_('Welcome Page'), :url => '/foreman_plugin_template/welocme'
          menu :top_menu, :new_action, :caption => N_('New Action'), :url => '/foreman_plugin_template/new_action', :url_hash => { :controller => 'foreman_plugin_template/hosts', :action => 'new_action' }
        end

        # add dashboard widget
        widget 'foreman_plugin_template_widget', name: N_('Foreman plugin template widget'), sizex: 4, sizey: 1
      end
    end

    # Include concerns in this config.to_prepare block
    config.to_prepare do

      begin
        Host::Managed.send(:include, ForemanPluginTemplate::HostExtensions)
        HostsHelper.send(:include, ForemanPluginTemplate::HostsHelperExtensions)
      rescue => e
        Rails.logger.warn "ForemanPluginTemplate: skipping engine hook (#{e})"
      end
    end

    rake_tasks do
      Rake::Task['db:seed'].enhance do
        ForemanPluginTemplate::Engine.load_seed
      end
    end

    initializer 'foreman_plugin_template.register_gettext', after: :load_config_initializers do |_app|
      locale_dir = File.join(File.expand_path('../../..', __FILE__), 'locale')
      locale_domain = 'foreman_plugin_template'
      Foreman::Gettext::Support.add_text_domain locale_domain, locale_dir
    end
  end
end
