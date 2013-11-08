TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  template: JST['home/index'],

  events: {
    'mouseover #toBoard' : 'hoverBoardEvent',
    'click #toBoard' : 'boardEvent',
    'click #toSettings' : 'settingsEvent',
    'click #toBin' : 'binEvent',
  },
  
  hoverBoardEvent: function(){
    //hoverBoards: the future is now!
    var id = JSON.parse($('#user_boots').html()).current_user['id'];
    console.log(x);
       
  },
  
  boardEvent: function(){
    var user_id = JSON.parse($('#user_boots').html()).current_user['id'];
    var url = + user_id + '/boards'
    window.location.replace(url);
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
