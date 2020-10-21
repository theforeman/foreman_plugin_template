Rails.application.routes.draw do
  get 'new_action', to: 'foreman_plugin_template/hosts#new_action'
  match 'foreman_plugin_template' => 'react#index', :via => [:get]
end
