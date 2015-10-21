import {Trades, Orders, OrderBookItems} from 'collections';

Meteor.publish('orderQueue', function() {
  // TODO: authorize worker
  return Orders.find({complete: false, canceled: false});
});

Meteor.publish('myOrders', function() {
  if (!this.userId) throw new Meteor.Error('unauthorized');
  return Orders.find({
    userId:   this.userId,
    complete: false,
    canceled: false
  });
})

Meteor.publish('orderbook', function(pairId) {
  return OrderBookItems.find({pairId: pairId}, {sort: {price: -1}});
});

Meteor.publish('trades', function(pairId) {
  return Trades.find({pairId: pairId}, {sort: {createdAt: -1}, limit: 20});
});