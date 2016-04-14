import {Withdrawals} from '/both/collections';

Meteor.publish('withdrawalQueue', function() {
  // TODO: authorize worker
  return Withdrawals.find({state: 'initial'});
});

Meteor.publish('withdrawals', function() {
  if (!this.userId) return false;
  return Withdrawals.find({userId: this.userId});
});
