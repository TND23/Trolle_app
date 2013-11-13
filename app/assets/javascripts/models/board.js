TrolleApp.Models.Board = Backbone.Model.extend({
 
  initialize: function(visiting_user){
    this.visiting_user = visiting_user;    
  },
  
  defaults: {
    title: "My Board",
    user_id: (this.visiting_user === undefined)? 0 : this.visiting_user['id']
  },

  urlRoot: function(visiting_user){
    var that = this;
    var id = this.attributes['id'];    
    var url = '/users/' + id + '/boards';
    return url;
  }  
});