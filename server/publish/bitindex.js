import { ChartItems } from '/both/collections';

Meteor.publish('chartitems', function(pairId) {
  // TODO: authorize worker
  return ChartItems.find({pairId}, {sort: {time: 1}});
});
