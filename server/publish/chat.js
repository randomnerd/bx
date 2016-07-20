import {Chat} from '/both/collections';

Meteor.publish('chat', function() {
  return Chat.find({
    $or: [
      { isPrivate: false },
      { replyId: this.userId },
      { userId: this.userId }
    ]
  }, {
    sort: { createdAt: 1 },
    limit: 50
  });
});
