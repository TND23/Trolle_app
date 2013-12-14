TrolleApp.Collections.Lists = Backbone.Collection.extend({
	initialize: function(board_id){
		this.board_id = board_id.board_id;
	},

  url: function(){
    var url = "/boards/" + this.board_id + "/lists";
    return url;
  },

	model: TrolleApp.Models.List
});