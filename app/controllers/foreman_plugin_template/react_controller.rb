module ForemanPluginTemplate
  class ReactController < ::ApplicationController
    layout "foreman_plugin_template/layouts/application_react"

    def index
      render html: nil, layout: true
    end

    private

    def controller_permission
      :foreman_plugin_template
    end

    def action_permission
      :view
    end
  end
end
