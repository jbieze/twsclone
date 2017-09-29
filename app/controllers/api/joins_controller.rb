class Api::JoinsController < ApplicationController

  def index
    @joins = Join.all
  end

  def create
    @join = Join.new(join_params)
    @join.user_id = current_user.id

    if @join.save
      render 'api/joins/show'
    else
      render json: @join.errors.full_messages, status: 422
    end
  end

  def destroy
    @join = Join.where(event_id: params[:id], user_id: current_user.id).first
    @join.destroy
    render 'api/joins/show'
  end

  private
  def join_params
    params.require(:join).permit(:user_id, :event_id)
  end
  
end
