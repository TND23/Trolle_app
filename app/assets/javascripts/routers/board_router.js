TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({

  initialize: function(options){
    this.visiting_user = options[0];
    this.user_boards = options[1];
    //lists can be fetched.
  },

  routes: {
    "" : "index",
    ":id" : "findBoard",

  },

  index: function(){
    var that = this;
    var user_boards = this.user_boards;
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex(visiting_user, {collection: that.user_boards});
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
        that.displayResult(data);}
    });
  },

  displayResult: function(data){
    var that = this;
      for (var i = 0; i < user_boards.length; i++){
        if (user_boards[i].id == that.id){
          var current_board = user_boards[i];
          var boardDisplay = new TrolleApp.Views.BoardShow({model: current_board}, data);
          $('#board_content').append(boardDisplay.render().el);
        }
      }
    }
});
