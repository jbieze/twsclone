class Api::EventsController < ApplicationController

  def index
    @events = Event.find_by_id(params[:id])
  end

  def create
    @event = Event.new(event_params)
    @event.host_id = current_user.id
    if @event.save
      render :show
    else
      render json: @event.errors.full_messages, status: 418
    end
  end

  def update
    @event = Event.find_by_id(params[:id])
    if @event.update(event_params)
      render :show
    else
      render json: @event.errors.full_messages, status: 404
    end
  end

  def destroy
    @event = Event.find_by_id(params[:id])
    @event.delete
    render json: @event
  end

  private

  def event_params
    params.require(:event).permit(:city_id, :host_id, :attendee_id, :location)
  end
end
