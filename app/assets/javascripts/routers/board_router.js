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
    var user_boards = this.user_boards;       
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex(visiting_user, {collection: that.user_boards});
    $('#board_content').append(boardView.render().el);
  },
  
  findBoard: function(id){
    var that = this;
    this.id = id;
    
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