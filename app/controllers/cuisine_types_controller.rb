class CuisineTypesController < ApplicationController
  before_action :set_cuisine_type, only: [:show, :edit, :update, :destroy]

  # GET /cuisine_types
  # GET /cuisine_types.json
  def index
    @cuisine_types = CuisineType.all
  end

  # GET /cuisine_types/1
  # GET /cuisine_types/1.json
  def show
  end

  # GET /cuisine_types/new
  def new
    @cuisine_type = CuisineType.new
  end

  # GET /cuisine_types/1/edit
  def edit
  end

  # POST /cuisine_types
  # POST /cuisine_types.json
  def create
    @cuisine_type = CuisineType.new(cuisine_type_params)

    respond_to do |format|
      if @cuisine_type.save
        format.html { redirect_to @cuisine_type, notice: 'Cuisine type was successfully created.' }
        format.json { render :show, status: :created, location: @cuisine_type }
      else
        format.html { render :new }
        format.json { render json: @cuisine_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cuisine_types/1
  # PATCH/PUT /cuisine_types/1.json
  def update
    respond_to do |format|
      if @cuisine_type.update(cuisine_type_params)
        format.html { redirect_to @cuisine_type, notice: 'Cuisine type was successfully updated.' }
        format.json { render :show, status: :ok, location: @cuisine_type }
      else
        format.html { render :edit }
        format.json { render json: @cuisine_type.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cuisine_types/1
  # DELETE /cuisine_types/1.json
  def destroy
    @cuisine_type.destroy
    respond_to do |format|
      format.html { redirect_to cuisine_types_url, notice: 'Cuisine type was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cuisine_type
      @cuisine_type = CuisineType.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cuisine_type_params
      params.fetch(:cuisine_type, {})
    end
end
