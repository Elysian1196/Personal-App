import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Profiles.remove({});  // clear the database
  Group.remove({});
  Profiles.insert({name:'Matthew', picture: 'images/Bedouin Pharah.jpg', likes: ['overwatch', 'gaming'], owner: 'developer'});
});
