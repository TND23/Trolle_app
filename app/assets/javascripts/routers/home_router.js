TrolleApp.Routers.HomeRouter = Support.SwappingRouter.extend({
  
  initialize: function($rootEl, boards, visiting_user){    
    this.$rootEl = $rootEl;
    this.boards = boards;
    this.visiting_user = visiting_user;
  },
  
  routes: {
    "" : "index",
    "#/board/1" : "show",
    "boards#/board/1" : "show",
    "#/board/1" : "show",
    //show: http://localhost:3000/users/1#asfdsdfasdf
    //myShow: http://localhost:3000/users/1/boards#/board/1
    
    //reshow: http://localhost:3000/users/1/#asdfs/dog
  },
  
  index: function(){
    var that = this;
    var rootEl = this.$rootEl;
    var boards = this.boards;
    var curr_user = JSON.parse($('#user_boots').html());
    var homeIndexForm = new TrolleApp.Views.HomeIndex({model: curr_user}, rootEl, boards);
    var renderedHome = homeIndexForm.render();    
    $("#content").append(renderedHome.el);
  },
  
  show: function(){
    alert('showmanship!');
  },
  
});