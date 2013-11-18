TrolleApp.Models.List = Backbone.Model.extend({
  
  initialize: function(listtitle, board_id){
    this.listtitle = listtitle;
    this.board_id = board_id.board_id;
    console.log(board_id);
  },
  
  urlRoot: function(board_id){
    var url = "/boards/" + board_id + "/lists";
    return url;
  }  
 
});  