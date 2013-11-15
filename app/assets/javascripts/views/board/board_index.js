TrolleApp.Views.BoardIndex = Backbone.View.extend({
  
  initialize: function(user, user_boards, board, list, card){
    this.user = user;
    this.collection = user_boards;
    this.user_boards = user_boards.collection;
    this.board = board;
    this.list = list;
    this.card = card;
    console.log(this.card);
  },
  
  template: JST['boards/index'],
  events: {
    "click #boardForm" : "showBoardForm",
    "click #createBoard" : "submitBoard",
    "click #home" : "goHome",
  },

  showBoardForm: function(){
    //we want to have this guy append the form to the bottom of this
    //part of the nav bar.
    var that = this;
    if($("#createContainer").length > 0){
      $('#createHolder').toggle();
    }
    else{
      $('#createHolder').append((JST['boards/new']({user: that.user})));
      $('#createHolder').toggle();
    }
  },  
  
  submitBoard: function(event){
    event.preventDefault();
    
    var that = this;
    var id = this.user.id;
    var title = $('#board_boardtitle').val();
    if(title.length < 1){
      alert("please give your board a title");
      window.location = "users/"+id+"/boards"
    }
    else{
      var newBoard = new TrolleApp.Models.Board({boardtitle: title, user_id: id});
      newBoard.save({success: function(){alert('user_board')}}, {error: function(){alert("something has gone wrong in saving")}});
    }
  },
  
  goHome: function(){
    window.location = ("/");
  },
    
  render: function(){
    var that = this;    
    var boards = that.user_boards;
    $(this.el).append(this.template({boards: that.user_boards}));
    return this;
  },
  
});
