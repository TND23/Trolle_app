TrolleApp.Views.BoardShow = Backbone.View.extend({
  
  initialize: function(model, data){
    this.model = model;
    this.data = data;  
  },
  
  template: JST['boards/show'],
  events: {
    "click .cards" : "dragIt",
    "mouseover #listButtonHolder" : "displayButtonInfo",
    "click #listButtonHolder" : "displayButtonInfo",
    "click .createCard" : "createCard",
    "click #createList" : "makeList",
    "click .deleteAList" : "destroyList",
    "click #listForm" : "showListInfo",
  },
 

  createCard: function(event){
    event.preventDefault();
  },
  
  makeList: function(event){
    //event.preventDefault();
    var that = this;
    
    this.board_id = this.model.model.id
    
    this.newListTitle = $("#list_listtitle").val();
    var newList = new TrolleApp.Models.List({listtitle: that.newListTitle},{board_id: that.board_id});
    // var that = this;
//     this.board_id = this.model.model.id
//     
//     this.newListTitle = $("#list_listtitle").val();
//     
//     
//     $.ajax({
//       url: "/boards/"+that.board_id+"/lists.json", 
//       type:"POST", 
//       data: TrolleApp.Models.List({listtitle: that.newListTitle},{board_id: that.board_id}), 
//       success: function(){
//         alert('win');}
//     });
      newList.save(newList.attributes,{success: function(){alert('win')}, error: function(x, xhr, options){console.log(x); console.log(xhr); console.log(options)}});
  },
  
  displayButtonInfo: function(event){
    event.preventDefault();
  },
  
  destroyList: function(event){
    event.preventDefault();
    var cid = $(event.target).attr('id');
    var list = this.collection.getByCid(cid);
    console.log(list);
  // person.destroy({
//       success: function(removed_person, data) {
//           self.collection.remove(removed_person);
//       },
//       error: function(aborted_person, response) {
//           // Error handling as needed.
   // var corresponding_list = event.target.parentElement.parentElement.parentElement;
 //   corresponding_list.remove();
 //   console.log(corresponding_list.id);
 //   var user_id = current_user['id'];
 //   var list_id = corresponding_list.id.match(/\d+/);
 //   var that = this;
 //   this.board_id = this.model.model.id
 //   $.ajax({
 //     url: "/boards/"+ that.board_id+"/lists/"+list_id+".json", 
 //     type:"GET", 
 //     success: function(data){
 //       console.log(data);}
 //   });
  },
  dragIt: function(event){
    var card_container = event.target.id.toString();
    var that = this;
    this.card = $("#"+card_container)[0]
    $(".listOfLists").droppable({
      drop: function(event){
        that.card.remove();
        $(event.target).append(that.card)        
      }
    });  
    $(".cards").draggable({ opacity: 0.35 });
  },
  
  showListInfo: function(event){
    var that = this;
    event.preventDefault();
    if ($('#listNameContainer').length <= 0){
      $('#listMenu').append(JST['lists/new']({board: that.model.model}));
    } else {
      $('#listNameContainer').remove();
    }
  },
  
  render: function(){
    var that = this;
    var data = that.data;
    var board = that.model;
    $(this.el).append(this.template({data: data, board: board}));
    return this;
  },
});
