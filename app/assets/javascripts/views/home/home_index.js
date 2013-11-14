TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  initialize: function(user, user_boards){
    this.user = user;
    this.user_boards = user_boards;
  },
  
  template: JST['home/index'],

  events: {
    'click #toBoard' : 'goToBoards',
    'mouseover #toBoard' : 'showBoards',
    'mouseout #toBoard' : 'hideBoards',

    'click #toSettings' : 'goToSettings',
    'mouseover #toSettings' : 'showSettings',
    'mouseout #toSettings' : 'hideSettings',
    
    'click #toBin' : 'goToBin',
    'mouseover #toBin' : 'showBin',
    'mouseout #toBin' : 'hideBin',    
  },
  
  //authenticity token visible
  showBoards: function(){    
    //if the board holder is present, do nothing. Otherwise show it.
    if($('.board_holder').length > 0){
    } else {
      $('.board_holder').append("DJFKJFKDJFKJDKLJFKDJFKSDJFSDLFJ"); 
    } 
  },
  
  hideBoards: function(){
    //make sure to slowly fade out and remove the created element :)
    $('.board_holder').fadeOut("slow", function()
      { $('.board_holder').remove(); });
  },
  
  goToBoards: function(){
    //remove all BB elements, change router, add new BB content
    var that = this;
    this.off();
    this.remove();    
    var current_id = this.user.model['id'];
    window.location = current_id+'/boards'
  },
  
  highlight: function(){
    alert('highlighted');
  },
  
  goToBin: function(){
  
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
