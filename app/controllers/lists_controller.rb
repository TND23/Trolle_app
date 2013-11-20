class ListsController < ApplicationController
  def index
    current_board = Board.find(params[:board_id])
    @lists = current_board.lists
    if current_board['user_id'] != current_user['id']
      render :json => "You sure this is your board?"
    else
      render :json => @lists
    end
  end

  def new
    @list = List.new
  end

  def show
    @list = List.find(params[:board_id], params[:id])
    render :json => @list
  end

  def create
    @board = Board.find(params[:board_id])
    @list = List.new(params[:list])
    @list['board_id'] = @board['id']
    if @list.save
    else
      render :json => 'save failure'
    end
  end

  def destroy
    @list = List.find(params[:board_id][:id])
    if @list
      @list.destroy
    else
      render :json => 'could not find list'
    end
  end

end
