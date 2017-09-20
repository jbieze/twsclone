Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :users, only: [:create, :update]
  resource :session, only: [:create, :destroy]
  resources :cities, only: [:show, :index]
  resources :events, only: [:create, :update, :destroy]
end
