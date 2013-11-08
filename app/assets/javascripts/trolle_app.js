window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
    var $rootEl = $('#content');
    var visiting_user = JSON.parse($('#user_boots').html());
    console.log(visiting_user);
    var board = new TrolleApp.Models.Board(visiting_user);
    var boards = new TrolleApp.Collections.Boards();
    boards.add(board);
    
    board.fetch({
      success: function(models, response){
        //boardRouter doing anything?
        console.log(models);
        var boardRouter = new TrolleApp.Routers.BoardRouter();
        var homeRouter = new TrolleApp.Routers.HomeRouter();
        Backbone.history.start();
      },
      error: function(model, response){
        alert("fetching failed");
      }
    })
  }
};

