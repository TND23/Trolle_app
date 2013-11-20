TrolleApp.Views.BoardIndex = Backbone.View.extend({

  initialize: function(user, user_boards){
    this.user = user;
    this.collection = user_boards;
    this.user_boards = user_boards.collection;
  },

  template: JST['boards/index'],
  events: {
    "click #boardForm" : "showBoardForm",
    "click #createBoard" : "submitBoard",
    "click #home" : "goHome",
    "click .indivBoard" : "rerenderPage",
  },

  showBoardForm: function(){
    //restyle this
    var that = this;
    if($("#createContainer").length > 0){
      $('#createHolder').toggle();
    }
    else{
      $('#createHolder').append((JST['boards/new']({user: that.user})));
      $('#createHolder').toggle();
    }
  },

  submitBoard: function(event){
    event.preventDefault();

    var that = this;
    var id = this.user.id;
    var title = $('#board_boardtitle').val();
    if(title.length < 1){
      alert("please give your board a title");
      window.location = "users/"+id+"/boards";
    }
    else{
			var newListsCollection = new TrolleApp.Collections.Lists();

      var newBoard = new TrolleApp.Models.Board({boardtitle: title, user_id: id}, {collection: newListCollection});
      newBoard.save(newBoard.attributes, {success: function(){console.log(newBoard)}}, {error: function(){alert("something has gone wrong in saving")}});
		//	this.addToBoardList(newBoard);
    }
  },

	//addToBoardList: function(board){
	//
	// },
	//
  goHome: function(){
    window.location = ("/");
  },

  rerenderPage: function(event){
    //get rid of all the things on the page
    if($('.listOfLists').length > 0){
      event.preventDefault();
      $('#boardTitle').remove();
      $('.listOfLists').remove();
      $('#home_menu').remove();
      this.off();
      window.location = event.target;
    }
    else{
      $('#boardTitle').remove();
      $('#home_menu').remove();
    }
  },

  render: function(){
    var that = this;
    var boards = that.user_boards;
    $(this.el).append(this.template({boards: that.user_boards}));
    return this;
  },

});
