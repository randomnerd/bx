import {Wallets} from '/both/collections';

Meteor.publish('wallets', function() {
  if (!this.userId) return;
  return Wallets.find({userId: this.userId}, {fields: {secret: 0}});
});
