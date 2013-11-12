class BoardsController < ApplicationController

  def index
    user = current_user
    @boards = user.update_board_ids
  end
  
  def show
    user = current_user
    @boards = user.update_board_ids
    render :json => @boards
  end
end
