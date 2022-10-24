Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :games, only: %i[index show] do
        resources :leaderboards, only: %i[index create]
      end
      post '/character_locations', to: 'character_locations#verify_location', as: 'character_locations'
    end
  end
end
