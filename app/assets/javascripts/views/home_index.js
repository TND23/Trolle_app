TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  initialize: function($rootEl){
    this.$rootEl = $rootEl;
  },
  //JSON.parse($('#user_boots').html()).current_user.session_token
  //puZypZiWba2KMD2coD1p0g
  //puZypZiWba2KMD2coD1p0g
  //puZypZiWba2KMD2coD1p0g
  template: JST['home/index'],

  events: {
    'mouseout #toBoard' : 'hideBoards',
    'mouseover #toBoard' : 'showBoards',
    'click #toBoard' : 'goToBoards',
    'mouseover #toSettings' : 'settingsEvent',
    'click #toBin' : 'binEvent',
    'mouseover .board_holder' : 'coolEvent'
  },
  
  //authenticity token visible!!!
  showBoards: function(){
    //alert(JSON.parse($('#user_boots').html()).current_user.session_token)
    if($('.board_holder').length > 0){
      // do nooothing
    }
    else{
      $('#lowerContent').append(JST['boards/index']);
    }
    
  },
  
  hideBoards: function(){
    //make sure to slowly fade out and remove the created element :)
    $('.board_holder').fadeOut("slow", function()
      { $('.board_holder').remove(); });
  },
  
  coolEvent: function(){
    console.log('cool event has happened!');
  },
  
  goToBoards: function(getUser){
    curr_router = new TrolleApp.Routers.BoardRouter();
    window.location.replace('/boards');
  },
  
  createBoardDisplay: function(){
    $(this.el).append(JST['boards/board_index']);
  },
  
  settingsEvent: function(){
  },
  
  binEvent: function(){
  },
  
 
  render: function(){
    var that = this;
    $(this.el).append(this.template);
    return this;
  }
});
