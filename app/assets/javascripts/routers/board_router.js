TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({
  
  initialize: function(options){
    this.visiting_user = options[0];
    this.user_boards = options[1];
  },
  
  routes: {
    "" : "show",
  },
  
  show: function(){
    var that = this;
    var user_boards = this.user_boards;       
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex(visiting_user, {collection: that.user_boards});
    $('#board_content').append(boardView.render().el);
  },
        
});