Rails.application.routes.draw do
  resources :projects, only: [:index, :show, :destroy]
  resources :users, only: [:index, :show, :destroy]
  resources :comments, only: [:index, :show, :destroy]
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end
