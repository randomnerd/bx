import { check } from 'meteor/check';
import { TradePairs, ChartItems } from '/both/collections';

Meteor.publish('chartitems', function(pairId, permalink) {
  check(pairId, Match.Maybe(String));
  if (permalink) {
    check(permalink, String);
    let pair = TradePairs.findOne({ permalink });
    pairId = pair._id;
  };
  return ChartItems.find({pairId}, {sort: {time: 1}});
});
