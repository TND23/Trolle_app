TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({

  initialize: function(options){
    this.visiting_user = options[0];
    this.user_boards = options[1];
  },

  routes: {
    "" : "index",
    ":id" : "findBoard",

  },

  index: function(){
    var that = this;
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex({current_user: visiting_user, collection: TrolleApp.Collections.Boards});
		TrolleApp.Collections.Boards.fetch({reset: true, user_id: this.visiting_user});

    $('#board_content').append(boardView.render().el);
  },


  findBoard: function(id){
    var that = this;
    this.id = id;
		this.user_id = this.visiting_user.id;
    $.ajax({
      url: "/users/"+ this.user_id +"/boards/"+id+".json",
      type:"GET",
      success: function(data){
				console.log(data);
        that.displayResult(data);}
    });
  },

  displayResult: function(data){
    var that = this;
      for (var i = 0; i < user_boards.length; i++){
        if (user_boards[i].id == that.id){
          var current_board = user_boards[i];
          var boardDisplay = new TrolleApp.Views.BoardShow({collection: TrolleApp.Collections.Lists, current_board: current_board, data: data});
					// collection should be TrolleApp.Collections.Lists
          $('#board_content').append(boardDisplay.render().el);
        }
      }
    }
});
