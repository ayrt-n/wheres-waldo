module Api
  module V1
    class GamesController < ApplicationController
      def index
        @games = Game.all
        render json: @games
      end

      def show
      end
    end
  end
end
