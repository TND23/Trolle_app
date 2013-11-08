class BoardsController < ApplicationController
  def index
    @boards = Board.all
  end
  
  def show
    @boards = Board.all
    render :json => @boards
  end
end
