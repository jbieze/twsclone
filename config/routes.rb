Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show] do
      resources :events, only: [:index, :create]
    end
    resources :events, only: [ :show, :update, :destroy]
  end

  root "static_pages#root"
end
