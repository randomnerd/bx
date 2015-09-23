Meteor.startup(() => {
  Tracker.autorun(() => {
    if (Meteor.userId()) {
      Notifications.sub = Meteor.subscribe('notifications');
      Balances.sub = Meteor.subscribe('balances');
      Chat.sub = Meteor.subscribe('chat');
    } else {
      Balances.sub && Balances.sub.stop();
      Notifications.sub && Notifications.sub.stop();
      Chat.sub && Chat.sub.stop();
    }
  });
});
