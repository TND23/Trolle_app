class UsersController < ApplicationController
  before_filter :require_current_user!, :only => [:show]
  before_filter :require_no_current_user!, :only => [:create, :new]
  
  def create
    @user = User.new(params[:user])
    if @user.save
      self.current_user = @user
      redirect_to user_url(@user)
    else
      redirect_to new_user_url
    end
  end

  def new
    @user = User.new
    redirect_to users_url
  end

  def show
    @user = self.current_user
    # @board_ids = current_user.board_ids(@user) || {}
    # current_user.boards.each do |board|
    #   @board_ids[board.boardtitle] = board.id
    # end
    # current_user.board_id = @board_ids
    if params.include?(:id)
      @user = User.find(params[:id])
    else
      redirect_to user_url(current_user)
    end
  end
  
end