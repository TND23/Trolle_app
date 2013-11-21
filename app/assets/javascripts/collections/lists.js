TrolleApp.Collections.Lists = Backbone.Collection.extend({
  model: TrolleApp.Models.List,
  url: function(){
    var url = "/boards/" + this.board_id + "/lists";
    return url;
  }
});

TrolleApp.Collections.Lists = new TrolleApp.Collections.Lists();