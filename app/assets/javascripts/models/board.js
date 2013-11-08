TrolleApp.Models.Board = Backbone.Model.extend({
  defaults: {
    title: "My Board",
    user_id: 0
  },

  url: function(){
    var id = this.attributes.current_user['id'];
    var url = '/users/' + id + '/boards/' + 1
    return url;
  }
  
});