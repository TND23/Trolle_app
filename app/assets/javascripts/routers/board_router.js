TrolleApp.Routers.BoardRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    console.log('the board router has been initialized')
  },
  
  routes: {
    "/users/:user_id/boards/" : "showIndex",
    "" : "index",
    "/boards" : "showBoards"
  },
    
  showBoards: function(){
    alert('the /boards route has been seen by the board router');
  },  
  
  index: function(){
    alert('the / route has been seen by the board router');
  }
});