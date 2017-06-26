Meteor.methods({
  'group.insert'(member) {
    Group.insert(member);
  },
  'group.delete' (member) {
    Group.remove(member);
  },
  'profiles.insert'(user, profile){
    var current = Profiles.findOne({owner: user});
    if(current != undefined){
      Profiles.remove(current);
    }
    Profiles.insert(profile);
  },
  'profiles.name.update'(user, new_name){
    var current_profile = Profiles.findOne({owner: user});
    Profiles.update(current_profile,{$set: {name: new_name}});
  },
  'profiles.picture.update'(user, new_picture){
    var current_profile = Profiles.findOne({owner: user});
    Profiles.update(current_profile,{$set: {picture: new_picture}});
  },
  'profiles.likes.add'(user, new_like){
    var current_profile = Profiles.findOne({owner: user});
    Profiles.update(current_profile,{$addToSet: {likes: [new_like]}});
  },
  'profiles.likes.delete'(user, old_like){
    var current_profile = Profiles.findOne({owner: user});
    Profiles.update(current_profile,{$pull: {likes: [old_like]}});
  },
});
