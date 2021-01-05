module ForemanPluginTemplate
  # Example: Plugin's HostsController inherits from Foreman's HostsController
  class HostsController < ::HostsController
    # change layout if needed
    layout 'foreman_plugin_template/layouts/new_layout'

    def new_action
      # automatically renders view/foreman_plugin_template/hosts/new_action
    end

    def react_template_page_description
      render json: { description: "This is an example for a full react page in a foreman's plugin.
         For further documentation please visit foreman's Storybook page or run it locally by running 'npm run stories'" }
    end
  end
end
