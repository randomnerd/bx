import { check } from 'meteor/check';
import {TradePairs, Trades, Orders, OrderBookItems} from '/both/collections';

Meteor.publish('orderQueue', function() {
  // TODO: authorize worker
  return Orders.find({ complete: false, canceled: false });
});

Meteor.publish('myOrders', function() {
  if (!this.userId) throw new Meteor.Error('unauthorized');
  return Orders.find({
    userId:   this.userId,
    complete: false,
    canceled: false
  });
})

Meteor.publish('orderbook', function(pairId, permalink) {
  check(pairId, String);
  check(permalink, String);
  if (permalink) {
    let pair = TradePairs.findOne({ permalink });
    pairId = pair._id;
  };
  return OrderBookItems.find({ pairId }, { sort: { price: -1 } });
});

Meteor.publish('trades', function(pairId, permalink) {
  check(pairId, String);
  check(permalink, String);
  if (permalink) {
    let pair = TradePairs.findOne({ permalink });
    pairId = pair._id;
  };
  return Trades.find({ pairId }, { sort: { createdAt: -1 }, limit: 40 });
});
