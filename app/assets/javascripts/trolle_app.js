window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    //grab the root data
    var $rootEl = $('#content');
    //get the current user
    var visiting_user = JSON.parse($('#user_boots').html());
    
    //insert a board instance into the boards collection
    var board = new TrolleApp.Models.Board(visiting_user);
    var boards = new TrolleApp.Collections.Boards();
    boards.add(board);
    board.fetch({
      success: function(models, response){
        var homeRouter = new TrolleApp.Routers.HomeRouter($rootEl);
        Backbone.history.start();
      },
      error: function(model, response){
        alert("fetching failed");
      }
    })
  }
};

