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
      current_user.registered_events.delete(@event)
      render "api/events/show"
    else
      render json: ["You can't join an imaginary event, weirdo."]
    end
  end

  def index
    @registrations = Join.all
  end

  private
  def registration_params
    params.require(:join).permit(:event_id, :user_id)
  end
end
