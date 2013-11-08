TrolleApp.Views.HomeIndex = Backbone.View.extend({
  
  template: JST['home/index'],

  //Change events!!!!
  // events: {
//     'click .noteCard' : 'addCard'
//   },

  events: {
    'click #toBoard' : 'boardEvent',
    'click #toSettings' : 'settingsEvent',
    'click #toBin' : 'binEvent',
  },
  
  boardEvent: function(){
    
  },
  
  settingsEvent: function(){
    alert('wooooahaoooooh')
  },
  
  binEvent: function(){
    alert('wooooahaoooooh')
  },
 
  render: function(){
    var that = this;
    $(this.el).append(this.template);
    return this;
  }
});
//mine