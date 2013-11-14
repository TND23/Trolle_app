TrolleApp.Models.Card = Backbone.Model.extend({
 
  initialize: function(parent_list){
    this.parent_list = parent_list;    
  },

  defaults: {
    title: "Card"
  },

  urlRoot: function(list){
    var that = this;
    var list_id = this.parent_list.id;    
    var url = '/lists/' + list_id + '/cards';
    return url;
  }  
});