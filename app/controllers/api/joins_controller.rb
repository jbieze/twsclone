class Api::JoinsController < ApplicationController

  def create
		@join = Join.new(join_params)
		if @join.save
      @event = Event.find_by(id: join_params[:event_id])
      render "api/events/show"
    else
      render json: @join.errors.full_messages, status: 422
    end
	end


  def destroy
    @join = Join.find(params[:id])
    @join.destroy
    render :destroy
  end

  def show
    @join = Join.find(params[:id])
  end

  private
  def join_params
    params.require(:join).permit(:user_id, :event_id)
  end

end

class Api::JoinsController < ApplicationController

  def create
		@join = Join.new(join_params)
		if @join.save
      @event = Event.find_by(id: join_params[:event_id])
      render "api/events/show"
    else
      render json: @join.errors.full_messages, status: 422
    end
	end


  def destroy
    @join = Join.find(params[:id])
    @join.destroy
    render :destroy
  end

  def show
    @join = Join.find(params[:id])
  end

  private
  def join_params
    params.require(:join).permit(:user_id, :event_id)
  end
  
end
