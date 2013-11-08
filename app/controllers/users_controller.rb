class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:show]
  before_filter :require_no_current_user!, :only => [:create, :new]

  def create
    @user = User.new(params[:user])

    if @user.save
      self.current_user = @user
      redirect_to root_url
      console.log(root_url)
    else
      render :json => @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def show
    if params.include?(:id)
      @user = User.find(params[:id])
      self.current_user = @user
      redirect_to user_url(@user.id)
    else
      redirect_to root_url
    end
  end
  
  def destroy
    @user = User.find(params[:id])
    @user.session_token = nil
    redirect_to user_url
  end
  

end