class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.find_by(name: params[:session][:email].downcase)
    if user
      # Log the user in and redirect to the user's show page.
      log_in user
      redirect_to restaurants_path
    else
      # Create an error message.
    end
  end

  def destroy
    log_out
    render 'new'
  end

end
