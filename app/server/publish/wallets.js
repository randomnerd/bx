import {Wallets} from 'app/collections';

Meteor.publish('wallets', function() {
  if (!this.userId) return;
  return Wallets.find({userId: this.userId});
});
