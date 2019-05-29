class UsersController < ApplicationController
    def articles
        user = User.find_by(username: params[:username])
        render json: user.articles
    end
end
