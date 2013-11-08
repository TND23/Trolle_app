TrolleApp.Views.BoardsDisplay = Backbone.View.extend({
  
  template: JST['boards/show'],
  tagName: "ul",
  className: "boards-index",
  
  events: {
    'click #toBoards' : 'toBoards'
  },
  
  toBoards: function(){
    alert('to the boards!');
  },
  
  intialize: function(){
    alert("got here");
  },
 
  render: function(){
    var that = this;
    $(this.el).append(this.template);
    return this;
  }
});