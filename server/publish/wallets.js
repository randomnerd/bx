import {Wallets, TradePairs, Trades} from '/both/collections';

Meteor.publish('wallets', function() {
  if (!this.userId) return;
  return Wallets.find({userId: this.userId}, {fields: {secret: 0}});
});
Meteor.publish('wallet_trades', function(currId) {
  check(currId, String);
  if (!this.userId) return;
  let pairs = TradePairs.find({$or:[{currId}, {marketCurrId: currId}]}).fetch();
  let pair_ids = pairs.map(function(pair) {
    return pair._id;
  });
  return Trades.find({pairId: {$in: pair_ids}, $or: [{buyerId: this.userId}, {sellerId: this.userId}]});
});
