Template.profile.onCreated(function(){
  Meteor.subscribe('group');
  //Meteor.subscribe('profiles');
})
Template.group.helpers({
  peoplelist() {return Group.find()},
})
Template.group.events({
  'click #gr_submit_1' : function (e, instance) {
    const add = instance.$('#group_add').val();
    instance.$('#group_add').val("");
    var member = {name: add};
    Meteor.call('group.insert', member);
    // var check = false;
    // Group.find().forEach( function(person) {
    //   console.log("person.name");
    //   if (person.name == add){
    //     check = true;
    //   }
    // });
    // if(check == true){
    //   var member = {name: add};
    //   Meteor.call('group.insert', member);
    // }else{
    //   alert("There is no current user that goes by this name.")
    // }
  },
  'click #gr_submit_2' : function (e, instance) {
    const remove = instance.$('#group_delete').val();
    instance.$('#group_delete').val("");
    var to_be_deleted = {name:remove};
    //var current_id = Group.findOne({name:remove})._id
    Meteor.call('group.delete', to_be_deleted);
  }//,
  /*
  'click #group_evaluater' : function (e, instance) {
    Group.find().forEach( function(myDoc) {

  });
    //for each person listed within the group
    //if it is not current user:
      //compare the likes of both users
      //if there is a similarity, print out both the user with similar interests and the similar likes

    //maybe use a new similarity collection?
  }
  */
})
