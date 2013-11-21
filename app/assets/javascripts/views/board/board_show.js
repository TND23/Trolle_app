TrolleApp.Views.BoardShow = Backbone.View.extend({

  initialize: function(model, data){
		this.board = model;
    this.model = model.model;
    this.data = data;
  },

  template: JST['boards/show'],
  events: {
    "click .cards" : "dragIt",
    "mouseover #listButtonHolder" : "displayButtonInfo",
    "click #listButtonHolder" : "displayButtonInfo",
    "click .createCard" : "createCard",
    "click #createList" : "makeList",

		"mouseover #createList" : "debug",

    "click .deleteAList" : "destroyList",
    "click #listForm" : "showListInfo",
  },


  createCard: function(event){
    event.preventDefault();
  },

  makeList: function(event){
    event.preventDefault();
    var that = this;
    this.newListTitle = $("#list_listtitle").val();
		this.board_id = this.model.id;
		console.log(this.board_id);
    var newList = new TrolleApp.Models.List({listtitle: that.newListTitle, board_id: that.board_id});
		console.log(newList.attributes);
    newList.save(newList.attributes, {  error: function(model, error) {
      console.log(model.toJSON());
      console.log('error.responseText');}});
  },



  displayButtonInfo: function(event){
    event.preventDefault();
  },

  destroyList: function(event){
    event.preventDefault();
		var that = this;
		var list_id = parseInt(event.target.id)
		this.board_id = this.model.id;
    var list = new TrolleApp.Models.List({id: list_id, board_id: this.board_id});
		//{collection: }
	  list.fetch({success: function(){console.log(list.toJSON());}})
		list.destroy({success: function(){console.log('it gone');}})


    $.ajax({
      url: "/boards/"+ that.board_id+"/lists/"+list_id,
      type:"GET",
      success: function(data){
        console.log(data);}
    });
  },
  dragIt: function(event){
    var card_container = event.target.id.toString();
    var that = this;
    this.card = $("#"+card_container)[0]
    $(".listOfLists").droppable({
      drop: function(event){
        that.card.remove();
        $(event.target).append(that.card)
      }
    });
    $(".cards").draggable({ opacity: 0.35 });
  },

  showListInfo: function(event){
    var that = this;
    event.preventDefault();
    if ($('#listNameContainer').length <= 0){
      $('#listMenu').append(JST['lists/new']({board: that.board}));
    } else {
      $('#listNameContainer').remove();
    }
  },

  render: function(){
    var that = this;
    var data = that.data;
    var board = that.board;
    $(this.el).append(this.template({data: data, board: board}));
    return this;
  },
});
//.save(null, {success: function (model, response) {console.log("success");},error: function (model, response) {console.log(model); console.log(response);}});
