TrolleApp.Routers.HomeRouter = Support.SwappingRouter.extend({

  initialize: function(options){
    this.visiting_user = options[0];
    this.user_boards = options[1];
  },

  routes: {
    "" : "index",
  },

  index: function(){

    var user_boards = this.user_boards;

    var visiting_user = this.visiting_user;

		// NEW HOMEINDEXFORM

    var homeIndexForm = new TrolleApp.Views.HomeIndex({current_user: visiting_user, user_boards: this.user_boards, collection: TrolleApp.Collections.Boards});
    var renderedHome = homeIndexForm.render();
    $("#content").html(renderedHome.el);
  },

});