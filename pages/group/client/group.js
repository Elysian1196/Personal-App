Template.group.helpers({
  Grouplist() {return Group.find()},
})
Template.group.events({
  'click #gr_submit_1' : function (e, instance) {
    const add = instance.$('#group_add').val();
    instance.$('#group_add').val("");
    Group.insert({name:add});
  },
  'click #gr_submit_2' : function (e, instance) {
    const remove = instance.$('#group_delete').val();
    instance.$('#group_delete').val("");
    var current_id = Group.findOne({name:remove})._id
    Group.remove({_id: current_id});
  }
})
