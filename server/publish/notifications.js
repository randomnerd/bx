Meteor.startup(function() {
  Meteor.publish('notifications', function () {
    return Notifications.find({user_id:Meteor.userId()});
  });
});
