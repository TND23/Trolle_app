TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({
  
  initialize: function(options){
    this.visiting_user = options[0];
    this.user_boards = options[1];
  },
  
  routes: {
    "" : "show",
    ":id" : "findBoard",
  },
  
  show: function(){
    var that = this;
    var user_boards = this.user_boards;       
    var visiting_user = this.visiting_user;
    var boardView = new TrolleApp.Views.BoardIndex(visiting_user, {collection: that.user_boards});
    $('#board_content').append(boardView.render().el);
  },
  
  findBoard: function(id){
    // board id
    this.id = id;
    
    for (var i = 0; i < user_boards.length; i++){
      if (user_boards[i].id == this.id){
        var current_board = user_boards[i];
        var boardDisplay = new TrolleApp.Views.BoardShow(current_board);
        $('#board_content').append(boardDisplay.render().el);
      }
    }
  }  
  // board id
  // this.id = id;
//   var that = this;
//   this.board_data = [];
//   var ajaxHash = {
//     url: "/users/1/boards.json", 
//     type:"GET", 
//     success: function(data){
//       return data;
//     }
//     function callback(){
//       console.log('goat')l
//     };
//   };
//     for (var i = 0; i < user_boards.length; i++){
//       if (user_boards[i].id == this.id){
//         var current_board = user_boards[i];
//         var boardDisplay = new TrolleApp.Views.BoardShow(current_board);
//         $('#board_content').append(boardDisplay.render().el);
//     }
//   }
  
  
        
});