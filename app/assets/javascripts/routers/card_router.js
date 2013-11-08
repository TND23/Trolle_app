TrolleApp.Routers.CardRouter = Backbone.Router.extend({
  
  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },
  routes: {
    "": "index",
    "/lists/:id/cards/:id": "show"
  },
  index: function(){
    var cardIndexForm = new TrolleApp.Views.CardsIndex({collection: cards});
    var renderedTemplate = cardIndexForm.render();
    $("#content").append(renderedTemplate.el);
  },
  
  show: function(id) {
    alert(id);
  }
 
});

