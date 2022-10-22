module Api
  module V1
    class GamesController < ApplicationController
      def index
        @games = Game.all
        render json: @games
      end

      def show
        @game = Game.find(params[:id])
        render json: @game, include: { characters: { only: %i[id name image_name] } }
      end
    end
  end
end
