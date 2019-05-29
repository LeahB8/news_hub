class UsersController < ApplicationController
    def index
        users = User.all
        render json: users
    end

    def articles
        user = User.find_by(username: params[:username])
        render json: user.articles
    end

    def create
        user = User.create(username: params[:username])
        # if User.save
            render json: user, include: [:articles]
        # end
    end

end
