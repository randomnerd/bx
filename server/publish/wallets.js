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

Meteor.publish('walletsAdmin', function(id) {
  check(id, Match.Maybe(String));
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');
  return Wallets.find({userId: id}, {fields: {secret: 0}});
});
