TrolleApp.Routers.HomeRouter = Support.SwappingRouter.extend({
  
  initialize: function(options){ 
    this.visiting_user = options[0];
    this.user_boards = options[1];
    // board is not passed from trolle_app
    console.log(this.user_boards)
  },
  
  routes: {
    "" : "index",
  },
  
  index: function(){
    var user_boards = this.user_boards;       
    var visiting_user = this.visiting_user;
    var homeIndexForm = new TrolleApp.Views.HomeIndex({model: visiting_user}, user_boards);
    var renderedHome = homeIndexForm.render();    
    $("#content").append(renderedHome.el);
    
  },
  
});