Rails.application.routes.draw do
  get 'new_action', to: 'foreman_plugin_template/hosts#new_action'
  get 'foreman_plugin_template', to: 'foreman_plugin_template/react#index'
end
