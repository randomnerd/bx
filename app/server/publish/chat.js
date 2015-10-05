import {Chat} from 'app/collections';

Meteor.publish('chat', function () {
  return Chat.find({}, {sort: {createdAt: -1}, limit: 50});
});
