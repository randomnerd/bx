Meteor.startup(() => {
  Tracker.autorun(() => {
    if (Meteor.userId()) {
      Notifications.sub = Meteor.subscribe('notifications')
    } else {
      Notifications.sub && Notifications.sub.stop()
    }
  })
})
