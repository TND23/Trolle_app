TrolleApp.Views.BoardIndex = Backbone.View.extend({
  
  template: JST['boards/index'],
  events: {

  },

  render: function(){
    var that = this;    
    var renderedContent = JST['boards/index']({boards: that.collection});
    return renderedContent;
  }
});
