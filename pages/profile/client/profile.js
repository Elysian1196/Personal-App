Template.profile.events({
  'click #new' : function (e, instance) {
    var to_be_inserted = {name:'Default', picture: 'images/Bedouin Pharah.jpg', likes: [], owner: Meteor.userId()};
    Meteor.call('profiles.insert', Meteor.userId(), to_be_inserted);
  },
  'click #name_add' : function (e, instance) {
    console.log('changing name')
    const name = instance.$('#name').val();
    instance.$('#name').val("");
    Meteor.call('profiles.name.update', Meteor.userId(), name)
  },
  'click #picture_add' : function (e, instance) {
    const picture = instance.$('#picture').val();
    instance.$('#picture').val("");
    Meteor.call('profiles.picture.update', Meteor.userId(), picture);
  },
  'click #likes_add' : function (e, instance) {
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Meteor.call('profiles.likes.add', Meteor.userId(), like);
  },
  'click #likes_delete' : function (e, instance) {
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Meteor.call('profiles.likes.delete', Meteor.userId(), like);
  }
})
