TrolleApp.Models.List = Backbone.Model.extend({

  initialize: function(attributes){
    this.board_id = attributes['board_id'];
  },

  urlRoot: function(){
    var url = "/boards/" + this.board_id + "/lists";
    return url;
  }

});