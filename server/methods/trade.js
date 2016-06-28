import { check } from 'meteor/check';
import {TradePairs, Orders, Balances} from '/both/collections';
import {TradePair, Balance, User} from '/both/models';
import {Jobs} from '../job_collection';

Meteor.methods({
  addBalance: function(params) {
    check(params, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');
    let user = params.userId ? Meteor.users.findOne({_id: params.userId}) : Meteor.user();
    let balance = user.balanceFor(params.currId);
    if (!balance) {
      Balances.insert({
        userId: params.userId || Meteor.userId(),
        currId: params.currId,
        held: 0,
        amount: params.amount * Math.pow(10, 8)
      });
    } else {
      Balances.update({_id: balance._id}, {$inc: {amount: params.amount * Math.pow(10, 8)}});
    }
  },

  createOrder: function(params) {
    check(params, Object);
    let price = parseFloat(params.price);
    let amount = parseFloat(params.amount);
    if (!price || price <= 0) throw new Meteor.Error('wrong order');
    if (!amount || amount <= 0) throw new Meteor.Error('wrong order');
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    let user = Meteor.user();

    let pair = TradePairs.findOne({_id: params.pairId});
    let currId = params.buy ? pair.marketCurrId : pair.currId;
    let balance = user.balanceFor(currId);

    // if (balance.amount < params.amount) throw new Meteor.Error('Not enough balance');

    var job = new Job(Jobs, 'newOrder', {
      price:  params.price,
      amount: params.amount,
      pairId: params.pairId,
      userId: Meteor.userId(),
      buy:    params.buy
    });
    job.save();
  },

  cancelOrder: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    let order = Orders.findOne({_id: id});
    if (!order) throw new Meteor.Error('Order not found');
    if (order.userId !== Meteor.userId()) throw new Meteor.Error('Unauthorized');

    var job = new Job(Jobs, 'cancelOrder', {id: id});
    job.save();
  },

  cancelOrders: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    let order = Orders.find({_id: id});
    if (!order) throw new Meteor.Error('Order not found');
    if (order.userId !== Meteor.userId()) throw new Meteor.Error('Unauthorized');

    var job = new Job(Jobs, 'cancelOrder', {id: id});
    job.save();
  }
})
