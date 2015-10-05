import {Balances} from 'app/collections';

Meteor.publish('balances', function () {
  if (!this.userId) return false;
  return Balances.find({userId:this.userId});
});