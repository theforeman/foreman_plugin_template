ForemanPluginTemplate::Engine.routes.draw do
  get 'new_action', to: 'example#new_action', as: 'new_action'
  get 'plugin_template_description', to: 'example#react_template_page_description'
  get 'welcome', to: '/react#index', as: 'welcome'
end

Foreman::Application.routes.draw do
  mount ForemanPluginTemplate::Engine, at: '/foreman_plugin_template'
end
