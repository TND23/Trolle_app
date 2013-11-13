TrolleApp.Views.BoardIndex = Backbone.View.extend({
  
  initialize: function(user, user_boards){
    this.user = user;
    this.user_boards = user_boards.collection;
  },
  
  template: JST['boards/index'],
  events: {
    "click #boardForm" : "showBoardForm",
    "click #createBoard" : "submitBoard",
  },

  render: function(){
    var that = this;    
    var boards = that.user_boards;
    $(this.el).append(this.template({boards: that.user_boards}));
    return this;
  },
  
  showBoardForm: function(){
    // /users/:user_id/boards
    //we want to have this guy append the form to the bottom of this
    //part of the nav bar.
    var that = this;
    $('#menu').append(JST['boards/new']({user: that.user}))
    // var that = this;
 //    var createdBoard = new TrolleApp.Models.Board(that.user);
 //    $('#board_content').append(JST['boards/new']({user: that.user}));
  },  
  
  submitBoard: function(){
    
  }
  
});
