// TrolleApp.Routers.BoardRouter = Support.SwappingRouter.extend({
//   
//   initialize: function(user, $rootEl, boards){
//     // console.log('the board router has been initialized')
//     this.user = user;
//     this.$rootEl = $rootEl;
//     this.boards = boards; 
//   },
//   
//   routes: {
//      ":id" :"doThing",
//   },
//   
//   doThing: function(){
//     alert('called')
//     var that = this;
//     var boardView = new TrolleApp.Views.BoardIndex({collection: that.boards});
//     $('.board_content').append(boardView.render());
//   },
//   
//   whatEver: function(){
//     console.log("undefined");
//   },
//   
//   showBoard: function(){
//     alert('showboard called')
//     var that = this;
//     var boardView = new TrolleApp.Views.BoardIndex({collection: that.boards});
//     $('.board_content').append(boardView.render());
//   }    
// });