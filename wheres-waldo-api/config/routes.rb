Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: %i[index show]
      post '/character_locations', to: 'character_locations#verify_location', as: 'character_locations'
    end
  end
end
