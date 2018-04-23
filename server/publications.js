Meteor.publish('profiles',function(){
  return Profiles.find();
})
Meteor.publish('group',function(){
  return Group.find();
})
Meteor.publish('similarities',function(){
  return Similarities.find();
})
