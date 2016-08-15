import {Balances} from '/both/collections';

Meteor.publish('balances', function() {
  if (!this.userId) return false;
  return Balances.find({userId: this.userId});
});
Meteor.publish('balancesAdmin', function(id) {
  check(id, Match.Maybe(String));
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');
  return Balances.find({userId: id});
});
