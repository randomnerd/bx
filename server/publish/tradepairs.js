import {TradePairs} from '/both/collections';

Meteor.publish('tradepairs', function() {
  return TradePairs.find({published: true});
});

Meteor.publish('tradepairsAdmin', function() {
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');
  return TradePairs.find({});
});
