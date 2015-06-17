require 'deface'

module ForemanPluginTemplate
  class Engine < ::Rails::Engine
    engine_name 'foreman_plugin_template'

    config.autoload_paths += Dir["#{config.root}/app/controllers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/helpers/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/models/concerns"]
    config.autoload_paths += Dir["#{config.root}/app/overrides"]

    # Add any db migrations
    initializer 'foreman_plugin_template.load_app_instance_data' do |app|
      app.config.paths['db/migrate'] += ForemanPluginTemplate::Engine.paths['db/migrate'].existent
    end

    initializer 'foreman_plugin_template.register_plugin', after: :finisher_hook do |_app|
      Foreman::Plugin.register :foreman_plugin_template do
        requires_foreman '>= 1.4'

        # Add permissions
        security_block :foreman_plugin_template do
          permission :view_foreman_plugin_template, :'foreman_plugin_template/hosts' => [:new_action]
        end

        # Add a new role called 'Discovery' if it doesn't exist
        role 'ForemanPluginTemplate', [:view_foreman_plugin_template]

        # add menu entry
        menu :top_menu, :template,
             url_hash: { controller: :'foreman_plugin_template/hosts', action: :new_action },
             caption: 'ForemanPluginTemplate',
             parent: :hosts_menu,
             after: :hosts

        # add dashboard widget
        widget 'foreman_plugin_template_widget', name: N_('Foreman plugin template widget'), sizex: 4, sizey: 1
      end
    end

    initializer 'foreman_plugin_template.configure_assets', group: :assets do
      # Precompile any JS or CSS files under app/assets/
      # If requiring files from each other, list them explicitly here to avoid precompiling the same
      # content twice.
      assets_to_precompile =
        Dir.chdir(root) do
          Dir['app/assets/javascripts/**/*', 'app/assets/stylesheets/**/*'].map do |f|
            f.split(File::SEPARATOR, 4).last
          end
        end

      SETTINGS[:foreman_plugin_template] = { assets: { precompile: assets_to_precompile } }
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

    initializer 'foreman_plugin_template.register_gettext', after: :load_config_initializers do |_app|
      locale_dir = File.join(File.expand_path('../../..', __FILE__), 'locale')
      locale_domain = 'foreman_plugin_template'
      Foreman::Gettext::Support.add_text_domain locale_domain, locale_dir
    end
  end
end
