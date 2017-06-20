Template.profile.events({
  'click #new' : function (e, instance) {
    console.log('adding default')
    current_id = Profiles.insert({name:'Default', picture: 'images/Bedouin Pharah.jpg', likes: []})
  },
  'click #name_add' : function (e, instance) {
    console.log('changing name')
    const name = instance.$('#name').val();
    instance.$('#name').val("");
    Profiles.update({_id:current_id}, {name: name})
  },
  'click #picture_add' : function (e, instance) {
    const picture = instance.$('#picture').val();
    instance.$('#picture').val("");
    Profiles.update({_id:current_id}, {picture: picture})
  },
  'click #likes_add' : function (e, instance) {
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Profiles.update({_id:current_id}, {$addToSet:{likes: like}})
  },
  'click #likes_delete' : function (e, instance) {
    const like = instance.$('#likes').val();
    instance.$('#likes').val("");
    Profiles.update({_id:current_id}, {$pull:{likes: like}})
  }
})
