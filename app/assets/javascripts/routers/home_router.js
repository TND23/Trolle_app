TrolleApp.Routers.HomeRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },
  
  routes: {
    "" : "index"   
  },
  
  index: function(){
    var homeIndexForm = new TrolleApp.Views.HomeIndex();
    var renderedHome = homeIndexForm.render();
    $("#content").append(renderedHome.el);
  },
  
  show: function(){
    
  }
  
});