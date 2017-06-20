Template.group.events({
  'click #gr_submit_1' : function (e, instance) {
    const add = instance.$('#group_add').val();
    instance.$('#group_add').val("");
    current_id = Group.findOne()._id
    Group.update({_id:current_id}, {$addToSet:{members: add}})
  },
  'click #gr_submit_2' : function (e, instance) {
    const remove = instance.$('#group_delete').val();
    instance.$('#group_delete').val("");
    current_id = Group.findOne()._id
    Group.update({_id:current_id}, {$pull:{members: remove}})
  }
})
