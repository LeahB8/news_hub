Rails.application.routes.draw do
  resources :users, only: [:show]
  resources :articles, only: [:create, :destroy]

  get '/:username/articles', to: 'users#articles'
end
