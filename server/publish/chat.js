Meteor.publish('chat', function () {
  if (!this.userId) return false;
  return Chat.find({userId:this.userId}, {sort: {createdAt: -1}, limit: 50});
});
