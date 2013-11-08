TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  template: JST['home/index'],

  events: {
    'mouseover #toBoard' : 'hoverBoardEvent',
    'click #toBoard' : 'showBoards',
    'click #toSettings' : 'settingsEvent',
    'click #toBin' : 'binEvent',
  },
  
  hoverBoardEvent: function(){
    this.$el.html(JST['board/index']);
  },
  
  showBoards: function(){
    window.location.replace('/boards');
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
