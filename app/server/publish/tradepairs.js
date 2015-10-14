import {TradePairs} from 'collections';

Meteor.publish('tradepairs', function() {
  return TradePairs.find({public: true});
});

Meteor.publish('tradepairsAdmin', function() {
  return TradePairs.find({});
});
