TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({
  
  initialize: function(options){

    this.visiting_user = options[0];
    this.user_boards = options[1];
    this.board = options[2];
    this.list = options[3];
    this.card = options[4];
  },
  
  routes: {
    "" : "index",
    ":id" : "findBoard",
  },
  
  index: function(){
    var that = this;
    var user_boards = this.user_boards;       
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex(visiting_user, {collection: that.user_boards}, {board: that.board}, {list: that.list}, {card: that.card});
    $('#board_content').append(boardView.render().el);
  },
  
  findBoard: function(id){
    var that = this;
    this.id = id;
    var card = this.card;
    var list = this.list
    var board = this.board;
    $.ajax({
      url: "/users/1/boards/"+that.id+".json", 
      type:"GET", 
      success: function(data){
        displayResult(data);}
    });
    
    var displayResult = function(data){   
      for (var i = 0; i < user_boards.length; i++){
        if (user_boards[i].id == that.id){
          var current_board = user_boards[i];
          var boardDisplay = new TrolleApp.Views.BoardShow({model: current_board}, data);
          $('#board_content').append(boardDisplay.render().el);
        }      
      }
    }
  }  
     
});