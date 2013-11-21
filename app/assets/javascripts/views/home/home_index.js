TrolleApp.Views.HomeIndex = Backbone.View.extend({


	//INITIALIZED FROM HOME ROUTER

  initialize: function(options){
    this.user = options.current_user;
    this.user_boards = options.user_boards;
		this.collection = options.collection;
		//listenTo allows dynamic rendering
  },

  template: JST['home/index'],

  events: {
    'click #toBoard' : 'goToBoards',
  },

  goToBoards: function(){
    //remove all BB elements, change router, add new BB content
		event.preventDefault();
    var that = this;
    this.off();
    this.remove();
    var current_id = this.user.id;
    window.location = current_id+'/boards'
  },

  render: function(){
    // ensure content only rendered if it doesn't exist
    var that = this;
    $(this.el).append(this.template({user: that.user}));
    return this;
  }
});