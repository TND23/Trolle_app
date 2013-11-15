TrolleApp.Models.Board = Backbone.Model.extend({
  
  defaults: {
    user_id: 0,
    boardtitle: "My new board"
  },

  urlRoot: function(){
    var that = this;
    var url = '/users/' + that.attributes['user_id'] + '/boards';
    return url;
  },
});