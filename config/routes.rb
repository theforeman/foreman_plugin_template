ForemanPluginTemplate::Engine.routes.draw do
  get 'new_action', to: 'hosts#new_action'
  get 'plugin_template_description', to: 'hosts#react_template_page_description'
  get 'welcome', to: '/react#index'
end

Foreman::Application.routes.draw do
  mount ForemanPluginTemplate::Engine, at: '/foreman_plugin_template'
end
