import {Transactions} from 'collections';

Meteor.publish('transactions', function() {
  // TODO: authorize worker
  return Transactions.find({userId: this.userId});
});
