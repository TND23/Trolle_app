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
    @board = Board.new
  end
  
end
