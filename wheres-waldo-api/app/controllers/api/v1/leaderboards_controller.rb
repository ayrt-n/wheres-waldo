module Api
  module V1
    class LeaderboardsController < ApplicationController
      def index
        @leaderboards = Score.limit(5).order(ellapsed_time: :asc)

        render json: @leaderboards
      end

      def create
        @leaderboard = Score.create(score_params)
      end

      private

      def score_params
        params.require(:score).permit(:name, :ellapsed_time)
      end
    end
  end
end
