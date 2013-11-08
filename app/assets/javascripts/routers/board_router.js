TrolleApp.Routers.BoardRouter = Backbone.Router.extend({
  
  initialize: function(options){
    
  },
  
  routes: {
    "/users/:user_id" : "index",   
    "/users/:user_id/boards/:board_id" : "show",
    "/users/:user_id/boards/" : "showIndex"
  },
  
  index: function(){
    var boardForm = new TrolleApp.Views.BoardsIndex({ model: board });
    var renderedTemplate = boardForm.render();
    $("#content").append(renderedTemplate.el);
  },
  
});