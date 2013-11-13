TrolleApp.Views.BoardIndex = Backbone.View.extend({
  
  initialize: function(user, user_boards){
    this.user = user;
    this.user_boards = user_boards.collection;
  },
  
  template: JST['boards/index'],
  events: {
    "click #createBoards" : "createBoard",
  },

  render: function(){
    var that = this;    
    var boards = that.user_boards;
    $(this.el).append(this.template({boards: that.user_boards}));
    return this;
  },
  
  createBoard: function(){
    var that = this;
    var createdBoard = new TrolleApp.Models.Board(that.user);
    $('#board_content').append(JST['boards/new']({user: that.user}));
  },  
  
});
