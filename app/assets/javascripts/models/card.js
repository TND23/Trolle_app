TrolleApp.Models.Card = Backbone.Model.extend({

	initialize: function(list_id){
		this.list_id = list_id;
	},

	urlRoot: "/lists/" + this.list_id + "/cards",

	defaults: {
		cardtitle: "",
		cardbody: "",
	}


});