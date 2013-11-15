TrolleApp.Views.BoardShow = Backbone.View.extend({
  
  initialize: function(model, data){
    this.model = model;
    this.data = data;
  },
  
  template: JST['boards/show'],
  events: {
    "click #createList" : "clicked",
    
  },
  
  clicked: function(event){
    event.preventDefault();
    var that = this;
    var name = $('#list_listtitle');
    var data = this.data;
    console.log(this.model);
    newList = new TrolleApp.Models.List(that.model);
    data.lists.push(newList);
    console.log(this.data);    
  },
  
  render: function(){
    var that = this;
    var data = that.data;
    var board = that.model;
    console.log(board);
    $(this.el).append(this.template({data: data, board: board}));
    return this;
  },
});
