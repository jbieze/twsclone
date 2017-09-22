class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render "api/cities/index"
  end

  def show
    @city = City.find(params[:id])
    if @city
      render "api/cities/show"
    else
      render json: [`#{@city}? I've never heard of it. Is that a real place?.`], status: 404
    end
  end

  private
  def city_params
    params.require(:city).permit(:name)
  end
end
