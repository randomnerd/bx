import {TradePairs} from 'collections';

Meteor.publish('tradepairs', function() {
  return TradePairs.find({published: true});
});

Meteor.publish('tradepairsAdmin', function() {
  return TradePairs.find({});
});
