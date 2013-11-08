TrolleApp.Models.Board = Backbone.Model.extend({
  defaults: {
    title: "My Board",
    user_id: 0
  },
  
  url: '/users/' + 1 + '/boards/' + 1,

});