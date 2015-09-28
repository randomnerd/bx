Meteor.publish('chat', function () {
  if (!this.userId) return false;
  return Chat.find({}, {sort: {createdAt: -1}, limit: 50});
});
