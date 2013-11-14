TrolleApp.Models.List = Backbone.Model.extend({
 
  initialize: function(name){
    this.listtitle = name;    
  },

  urlRoot: function(){  
    var url = "/boards" + this.parent_board['id'] + "/lists" + this.id;
    return url;
  }  
});