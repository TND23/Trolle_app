TrolleApp.Views.Boards = Backbone.View.extend({
  
  template: JST['boards/index'],
  
  events: {
    'click .visitBoard' : 'toBoards'
  },
  
  toBoards: function(){
    alert('to the boards!');
  },
 
  render: function(){
    var that = this;
    $(this.el).append(this.template);
    return this;
  }
});