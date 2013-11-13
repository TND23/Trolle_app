class ListsController < ApplicationController
  def index
    @lists = List.all
  end
  
  def new
    @list = List.new
    redirect_to list_url
  end
  
  def show
  end
  
  def create
  end
  
end
