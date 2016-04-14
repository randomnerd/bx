import {TradePairs} from '/both/collections';

Meteor.publish('tradepairs', function() {
  return TradePairs.find({published: true});
});

Meteor.publish('tradepairsAdmin', function() {
  return TradePairs.find({});
});
