TrolleApp.Routers.BoardRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },
  
  routes: {
    "/users/:user_id" : "index",   
    "/users/:user_id/boards/:board_id" : "show"
  },
  
  index: function(){
    var boardForm = new TrolleApp.Views.Boards();
    var renderedTemplate = boardForm.render();
    alert("GODKL")
    console.log(renderedTemplate);
    $("#content").append(renderedTemplate.el);
  },
  
  show: function(){
    
  }
  
});