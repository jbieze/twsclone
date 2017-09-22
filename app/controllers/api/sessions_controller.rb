class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username],params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["You managed to mess up your username or password somehow"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["That's jumping the gun a bit"], status: 404
    end
  end
end
