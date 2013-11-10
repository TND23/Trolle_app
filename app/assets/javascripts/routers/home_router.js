TrolleApp.Routers.HomeRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    console.log('the home router has been initialized');
  },
  
  routes: {
    "" : "index",
    "/boards" : 'thing'
  },
  
  index: function(){
    var curr_user = JSON.parse($('#user_boots').html());
    var homeIndexForm = new TrolleApp.Views.HomeIndex({model: curr_user});
    var renderedHome = homeIndexForm.render();    
    $("#content").append(renderedHome.el);
  },
  
  thing: function(){
    alert('the boards routes has been seen from the home router');
  }
    
});