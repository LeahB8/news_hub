Rails.application.routes.draw do
  resources :users, only: [:show, :create, :index]
  resources :articles, only: [:create, :destroy]

  get '/articles', to: 'users#articles'
end
