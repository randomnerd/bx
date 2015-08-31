Meteor.startup(() => {
  Tracker.autorun(() => {
    if (Meteor.userId()) {
      Notifications.sub = Meteor.subscribe('notifications');
      Balances.sub = Meteor.subscribe('balances');
    } else {
      Balances.sub && Balances.sub.stop();
      Notifications.sub && Notifications.sub.stop();
    }
  });
});
