class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      log_in @user
      render :show
    else
      render json: ["WRONG!! NIce try hacker >:P"], status: 418
    end
  end

  def destroy
    if current_user
      log_out
      render json: {}
    else
      render json: ["Jumping the gun a bit, aren't we?"], status: 418
    end
  end
end
