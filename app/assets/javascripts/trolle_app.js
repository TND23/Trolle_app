window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    //grab the root element
    var $rootEl = $('#content');
    //get the current user
    var visiting_user = JSON.parse($('#user_boots').html());
    var user_boards = JSON.parse($('#user_board_boots').html()).user_boards;
    //insert a board instance into the boards collection
    var board = new TrolleApp.Models.Board(visiting_user); //[]
    // boards.add(user_boards);
    board.fetch({
      success: function(){
        var homeRouter = new TrolleApp.Routers.HomeRouter($rootEl, user_boards, visiting_user);
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

