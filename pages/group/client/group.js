Template.group.helpers({
  peoplelist() {return Group.find()},
})
Template.group.events({
  'click #gr_submit_1' : function (e, instance) {
    const add = instance.$('#group_add').val();
    instance.$('#group_add').val("");
    var member = {name: add};
    Meteor.call('group.insert', member);
  },
  'click #gr_submit_2' : function (e, instance) {
    const remove = instance.$('#group_delete').val();
    instance.$('#group_delete').val("");
    var to_be_deleted = {name:remove};
    //var current_id = Group.findOne({name:remove})._id
    Meteor.call('group.delete', to_be_deleted);
  }
})
