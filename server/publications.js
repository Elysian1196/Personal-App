Meteor.publish('profiles',function(){
  return Profiles.find();
})
Meteor.publish('group',function(){
  return Group.find();
})
