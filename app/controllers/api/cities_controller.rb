class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.find_by(id: params[:id])

    if @city
      @users = @city.users
      render :show
    else
      render json: "Are you sure that's a real place?", status: 422
    end
  end
end
