Meteor.methods({
  'group.insert'(member) {
    Group.insert(member);
  },
  'group.delete' (member) {
    Group.remove(member);
  }
});
