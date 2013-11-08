TrolleApp.Routers.HomeRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    
  },
  
  routes: {
    "" : "index"   
  },
  
  index: function(){
    var curr_user = JSON.parse($('#user_boots').html());
    var homeIndexForm = new TrolleApp.Views.HomeIndex({model: curr_user});
    var renderedHome = homeIndexForm.render();    
    $("#content").append(renderedHome.el);
  },
  
});