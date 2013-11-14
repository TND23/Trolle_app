TrolleApp.Views.BoardShow = Backbone.View.extend({
  
  initialize: function(user_board){
    this.user_board = user_board;
  },
  
  template: JST['boards/show'],
  events: {
    
  },
  
  render: function(user_board){
    var that = this;    
    var board = that.user_board;
    $(this.el).append(this.template({board: that.user_board}));
    return this;
  },
});
