TrolleApp.Collections.Boards = Backbone.Collection.extend({
  
  model: TrolleApp.Models.Board,
  initialize: function(models, options){
    this.options = options;

    //quickly initialized
  },
  // model: TrolleApp.Models.Board,
  url: '/boards'
});