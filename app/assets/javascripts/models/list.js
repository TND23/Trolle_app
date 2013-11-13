TrolleApp.Models.List = Backbone.Model.extend({
 
  initialize: function(parent_board){
    this.parent_board = parent_board;    
  },
  
  defaults: {
    title: "My List",
  },

  urlRoot: function(){  
    var url = "/boards" + this.parent_board['id'] + "/lists" ;
    return url;
  }  
});