class ListsController < ApplicationController
  def index
    @lists = List.all
  end
  
  def new
    @list = List.new
    redirect_to list_url
  end
  
  def show
    @list = List.find(params[:id])
  end
  
  def create
    @board = Board.find(params[:board_id])
    @list = List.new
    @list.board_id = @board.id
    if @list.save
    else
      render :json => 'save failure'
    end
  end
  
  def destroy
    @list = List.find(params[:list])
    @list.destroy
  end
  
end
