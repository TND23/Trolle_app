TrolleApp.Models.List = Backbone.Model.extend({
  initialize: function(attributes){
    this.board_id = attributes['board_id'];
		this.listtitle = attributes['listtitle'];
		this.cards = new TrolleApp.Collections.Cards(this.id);
		this.cards.url = '/lists/'+this.id+'/cards';

  },

	defaults: {
		"cardCollection" : {}
	},

  urlRoot: function(){
    var url = "/boards/" + this.board_id + "/lists";
    return url;
  },

});