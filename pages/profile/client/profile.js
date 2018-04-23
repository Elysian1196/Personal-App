Template.profile.onCreated(function(){
  Meteor.subscribe('profiles');
});
Template.profile.helpers({
  current_profile() {return Profiles.find({owner: Meteor.userId()})},//get access to my profile
})
Template.profile.events({
  'click #new' : function (e, instance) {//make a new profile
    var to_be_inserted = {name:'Default', picture: 'images/default_profile.jpg', likes: [], owner: Meteor.userId()};//set defaults
    Meteor.call('profiles.insert', Meteor.userId(), to_be_inserted);//make a new profile
  },
  'click #name_add' : function (e, instance) {//changing name
    console.log('changing name')
    const name = instance.$('#name').val();
    instance.$('#name').val("");
    Meteor.call('profiles.name.update', Meteor.userId(), name)
  },
  'click #picture_add' : function (e, instance) {//changing picture
    const picture = instance.$('#picture').val();
    instance.$('#picture').val("");
    Meteor.call('profiles.picture.update', Meteor.userId(), picture);
  },
  'click #likes_add' : function (e, instance) {//updating likes list
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Meteor.call('profiles.likes.add', Meteor.userId(), like);
  },
  'click #likes_delete' : function (e, instance) {//deleting stuff from likes
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Meteor.call('profiles.likes.delete', Meteor.userId(), like);
  }
})
