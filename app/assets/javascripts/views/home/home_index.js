TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  initialize: function(user, $rootEl, boards){
    this.user = user;
    this.$rootEl = $rootEl;
    this.boards = boards; 
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
      $('#lowerContent').append(JST['boards/show']);      
    } 
   // console.log(this.user.model.current_user['id'])
  },
  
  hideBoards: function(){
    //make sure to slowly fade out and remove the created element :)
    $('.board_holder').fadeOut("slow", function()
      { $('.board_holder').remove(); });
  },
  
  goToBoards: function(){
    //remove all BB elements, change router, add new BB content
    $('.board_holder').remove();
    var that = this;
    this.off();
    this.remove();
    var id = this.user.model.current_user['id'];
    var theForm = JST['boards/index'];
    $('#lowerContent').remove();
    $('#content').append(theForm)
    // window.location=(id+"/boards")
  },
  
  goToBin: function(){
    
    var id = this.user.model.current_user.id
    window.location = id+"/boards"
    
    $('.board_holder').remove();
    var that = this;
    this.off();
    this.remove();    
  },

  
  render: function(){
    // ensure content only rendered if it doesn't exist
    var that = this;
    if($(".main-buttons").length === 0){
      $(this.el).append(this.template({user: that.user.model.current_user}));
    }
    return this;
  }
});
