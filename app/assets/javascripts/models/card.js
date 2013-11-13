TrolleApp.Models.Card = Backbone.Model.extend({
 
  initialize: function(list){
    this.list = list;    
  },
  
  defaults: {
    title: "List",
    user_id: (this.visiting_user === undefined)? 0 : this.visiting_user['id']
  },

  urlRoot: function(list){
    var that = this;
    var id = this.attributes['id'];    
    var url = '/users/' + id + '/boards';
    return url;
  }  
});