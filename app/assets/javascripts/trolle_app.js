window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(currentUser, routerOption, currentBoards) {
    var currentUser = currentUser;
    //grab the root element
    var $rootEl = $('#content');
    var routerOption = routerOption || 1;
    //get the current user
   
    var visiting_user = currentUser || JSON.parse($('#user_boots').html()).current_user;
    
    // there is no board when there isn't the bootstrap element. fix this.
    if($('#user_board_boots').length > 0){
      var user_boards = JSON.parse($('#user_board_boots').html()).user_boards;
    } else {
      user_boards = currentBoards;
    }
    
    //insert a board instance into the boards collection
    if(visiting_user){
      var board = new TrolleApp.Models.Board(visiting_user);
    }
      
    // boards.add(user_boards);
    board.fetch({
      success: function(){
        if (routerOption == 1) { 
          var homeRouter = new TrolleApp.Routers.HomeRouter([visiting_user, user_boards]); }
        if (routerOption == 2){
          var boardRouter = new TrolleApp.Routers.BoardRouter([currentUser, user_boards]);

        }

        Backbone.history.start();
      },
      error: function(model, response){
        alert("fetching failed");
        console.log(model);
        console.log(response);
      }
    })
  }
};

