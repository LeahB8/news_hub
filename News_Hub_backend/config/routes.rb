Rails.application.routes.draw do
  resources :users, only: [:show, :create, :index]
  resources :articles, only: [:index, :show, :create, :destroy, :update]

  # get '/articles', to: 'users#articles'
end
