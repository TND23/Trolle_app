TrolleApp.Models.Board = Backbone.Model.extend({
 
  initialize: function(visiting_user){
    this.visiting_user = visiting_user;
  },
  defaults: {
    title: "My Board",
    user_id: 0
  },

  urlRoot: function(visiting_user){
    var that = this;
    var id = this.attributes.current_user['id'];    
    var url = '/users/' + id + '/boards/' + 1;
    return url;
  }  
});