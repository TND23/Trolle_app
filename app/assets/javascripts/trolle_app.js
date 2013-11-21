window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function(currentUser, routerOption, currentBoards) {
    TrolleApp.csrfToken = $("meta[name='csrf-token']").attr('content');
    TrolleApp.currentUser = currentUser;

		TrolleApp.Collections.Boards = new TrolleApp.Collections.Boards({visiting_user: TrolleApp.currentUser});

    var $rootEl = $('#content');
    //get the router or assign it
    var routerOption = routerOption || 1;
    var visiting_user = currentUser || JSON.parse($('#user_boots').html()).current_user;

    if($('#user_board_boots').length > 0){
      var user_boards = JSON.parse($('#user_board_boots').html()).user_boards;
    } else {
      user_boards = currentBoards;
    }

    if(visiting_user){
      var board = new TrolleApp.Models.Board();
    }

		//decide which router is to be used based on what's passed in
    board.fetch({
      success: function(){
        if (routerOption == 1) {
          var homeRouter = new TrolleApp.Routers.HomeRouter([visiting_user, user_boards]);
				}
        if (routerOption == 2){
          var boardRouter = new TrolleApp.Routers.BoardRouter([currentUser, user_boards]);
        }
        Backbone.history.start();
      },
      error: function(model, response){
        alert("We're so sorry... something has gone terribly wrong.");
      }
    })
  }
};