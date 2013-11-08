window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var visiting_user = JSON.parse($('#user_boots').html());
    var boards = new TrolleApp.Models.Board(visiting_user);
    
    boards.fetch({
      success: function(response, model){
        console.log(response);
        console.log(model);
        var boardRouter = new TrolleApp.Routers.BoardRouter(boards);
        var homeRouter = new TrolleApp.Routers.HomeRouter($rootEl);
        
        console.log($(homeRouter.el))
        Backbone.history.start();
      },
      error: function(){
        console.log("Oh no!");
      }
    })
  }
};

$(document).ready(function(){
  TrolleApp.initialize();
});
