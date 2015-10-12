import {Wallets} from 'collections';

Meteor.publish('wallets', function() {
  if (!this.userId) return;
  return Wallets.find({userId: this.userId});
});
