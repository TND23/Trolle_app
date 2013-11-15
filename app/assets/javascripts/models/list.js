TrolleApp.Models.List = Backbone.Model.extend({
 
  urlRoot: function(){  
    var url = "/users/" + current_user.id + "/boards";
    return url;
  }  
});