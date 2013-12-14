class CardsController < ApplicationController
  def new
  end

  def index

    @list = List.find(params[:list_id])
    @cards = @list.cards
    render :json => @cards
  end

  def create
    @card = Card.new(params[:card])

    if @card.save
      render :json => @card
    else
      render :json => "card saving failed..."
    end
  end

  def show
    @card = Card.find(params[:id])
    render :json => @card
  end

  def edit
  end

  def update
    @card = Card.find(params[:id])
    @card.update_attributes :cardbody => params[:cardbody]
    render :json => @card
  end

  def destroy
    @card = Card.find(params[:id])
    if @card
      @card.destroy
    else
      render :json => "unable to find your card..."
    end
  end
end
