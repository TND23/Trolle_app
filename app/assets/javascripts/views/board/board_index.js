TrolleApp.Views.BoardIndex = Backbone.View.extend({
  
  template: JST['board/board_index'],

  events: {

  },

  
  render: function(){
    var that = this;
    console.log(that);
    $(this.el).append(this.template);
    return this;
  }
});
