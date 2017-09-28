class Api::JoinsController < ApplicationController

  def create
    @event = Event.find_by(id: params[:event_id])
  	@join = Join.new(event_id: @event.id, user_id: current_user.id)
  	if @join.save
      @event = @join.event
  		render "api/events/show"
  	else
  		render json: @join.errors.full_messages, status: 422
  	end
  end

  def destroy
    @event = Event.find_by(id: params[:event_id])
    if @event
      current_user.joined_events.delete(@event)
      render "api/events/show"
    else
      render json: ["You can't leave an imaginary event, weirdo."]
    end
  end

  def index
    @joins = Join.all
  end

  private
  def join_params
    params.require(:join).permit(:event_id, :user_id)
  end
end
