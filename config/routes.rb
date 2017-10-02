Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update]
    resource :session, only: [:create, :destroy]
    resources :cities, only: [:index, :show] do
      resources :events, only: [:index, :create]
    end
    resources :events, only: [ :show, :update, :destroy]
    resources :joins, only: [:create, :destroy, :show]
    # resources :users, only: [:index] do
    #   resources :events, only: [:index] do
    #     resources :joins, only: [:destroy]
    #   end
    # end
  end

  get 'events/user_events', :to => 'events#user_events'
  delete 'api/joins/:event_id', :to => 'joins#destroy'

  root "static_pages#root"
end
