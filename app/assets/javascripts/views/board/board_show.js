TrolleApp.Views.BoardShow = Backbone.View.extend({
  
  initialize: function(model, data){
    this.model = model;
    this.data = data;
  },
  
  template: JST['boards/show'],
  events: {
    
  },
  
  render: function(){
    var that = this;
    var data = that.data;
    console.log(data.lists[0].cards[0]);
    var board = that.model;
    console.log(board);
    $(this.el).append(this.template({data: data, board: board}));
    return this;
  },
});
