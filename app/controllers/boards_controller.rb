class BoardsController < ApplicationController

  def index
    user = current_user
    @boards = user.boards
  end
  
  def show
    user = current_user
    @boards = user.board_ids(user.username)
    render :json => @boards
  end
  
  def create
    user = User.find(params[:user_id])
    @board = Board.new(params[:board])
    @board.user_id = user.id
    if @board.save
      redirect_to user_boards_url
    else
      render :json => 'save failure'
    end

  end
  
end
