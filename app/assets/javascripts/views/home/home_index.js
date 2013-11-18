TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  initialize: function(user, user_boards){
    this.user = user;
    this.user_boards = user_boards;
  },
  
  template: JST['home/index'],

  events: {
    'click #toBoard' : 'goToBoards',
  },

  goToBoards: function(){
    //remove all BB elements, change router, add new BB content
    var that = this;
    this.off();
    this.remove();    
    var current_id = this.user.model['id'];
    window.location = current_id+'/boards'
  },
  
  render: function(){
    // ensure content only rendered if it doesn't exist
    var that = this;
    if($(".main-buttons").length === 0){
      $(this.el).append(this.template({user: that.user}));
      console.log($(this.el))
    }
    return this;
  }
});