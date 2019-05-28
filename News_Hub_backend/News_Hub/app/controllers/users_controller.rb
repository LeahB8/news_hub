class UsersController < ApplicationController
    def index
        @users = User.all
        render json: @users
    end

    def show
        @user = User.find_by(id: params[:id])
        if @user != nil
            rener json: User
        else
            render json: {error: "User not found."}, status: 404
    end

    def create
        @user = User.new(user_params)
        if User.save
            render json: @user
        else
            render json: {message: "User cannot be created."}
        end
    end

    def destroy
        @user = User.find_by(id: params[:id])
        if @user 
            @user.destroy
            render json: {message: "User Deleted"}
        end    
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name)
    end


end