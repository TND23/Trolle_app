window.TrolleApp = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $rootEl = $('#content');
    var visiting_user = console.log($('#user_boots'));
    var boards = new TrolleApp.Models.Board();
    
    boards.fetch({
      success: function(response, model){
        // console.log(response);
  //       console.log(model);
        var boardRouter = new TrolleApp.Routers.BoardRouter(boards);
        var homeRouter = new TrolleApp.Routers.HomeRouter($rootEl);
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
