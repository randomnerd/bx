import { check } from 'meteor/check';
import { ChartItems } from '/both/collections';

Meteor.publish('chartitems', function(pairId) {
  check(pairId, String);
  return ChartItems.find({pairId}, {sort: {time: 1}});
});
