module Api
  module V1
    class CharacterLocationsController < ApplicationController
      def verify_location
        @location = CharacterLocation.find_by(game_id: params[:game_id], character_id: params[:character_id])
        @response = @location.create_verification_response(params[:x].to_i, params[:y].to_i)

        render json: @response
      end
    end
  end
end