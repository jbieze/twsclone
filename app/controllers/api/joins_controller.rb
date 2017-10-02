class Api::JoinsController < ApplicationController

  def index
    @joins = Join.all
  end

  def create
    # debugger
    @join = Join.new(join_params)
    if @join.save
      # debugger
      @event = Event.find(params[:join][:event_id])
      render "api/events/show"
    else
      render json: @join.errors.full_messages, status: 422
    end
  end

  def destroy
    @join = Join.where(event_id: params[:id], user_id: current_user.id).first
    # debugger
    @join.destroy
    render "api/joins/show"
  end

  private
  def join_params
    params.require(:join).permit(:user_id, :event_id)
  end

end
