Meteor.startup(function(){
	Meteor.publish('userList', function (){
  return Meteor.users.find({});
});
});
