TrolleApp.Views.BoardShow = Backbone.View.extend({
  
  initialize: function(board, list, card){
    this.model = model;
    this.data = data;  
    
  },
  
  template: JST['boards/show'],
  events: {
    "click #createList" : "clicked",
    "click .cards" : "dragIt",
    "mouseover #listButtonHolder" : "displayButtonInfo",
    "click #listButtonHolder" : "displayButtonInfo",
    "click .createCard" : "createCard",
    "click #createList" : "createList",
    "click .deleteAList" : "destroyList",
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
  
  createCard: function(event){
    event.preventDefault();
  },
  
  createList: function(event){
    event.preventDefault()
    var that = this;
    this.board_id = this.model.model.id
    var newListTitle = $("#list_listtitle").val();
    console.log(current_user.id);
    if(newListTitle.length < 1){
        alert("please give your board a title");
    } 
    else{
      that.newList = new TrolleApp.Models.List({board_id: this.board_id}, {listtitle: newListTitle});
      that.newList.save({success: function(){alert('Awesome! A new board!')}}, {error: function(){alert("something has gone wrong in saving")}});
    }
  },
  
  displayButtonInfo: function(event){
    event.preventDefault();
  },
  
  destroyList: function(event){
    event.preventDefault();
    console.log(this.model)
    
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
  
  createCard: function(event){
    event.preventDefault();
  },
  
  render: function(){
    var that = this;
    var data = that.data;
    var board = that.model;
    $(this.el).append(this.template({data: data, board: board}));
    return this;
  },
});
