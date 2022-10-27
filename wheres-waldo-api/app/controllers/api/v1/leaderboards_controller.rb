module Api
  module V1
    class LeaderboardsController < ApplicationController
      def index
        @game = Game.find(params[:game_id])
        @leaderboards = @game.scores.limit(5).order(ellapsed_time: :asc)

        render json: @leaderboards
      end

      def create
        @game = Game.find(params[:game_id])
        @game.scores.create(score_params)

        render json: {}
      end

      private

      def score_params
        params.require(:score).permit(:name, :ellapsed_time)
      end
    end
  end
end
