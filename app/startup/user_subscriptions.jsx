import {TradePairs} from 'collections';

Meteor.subs = new SubsManager({ cacheLimit: 20 });

Meteor.subs.subscribe('currencies');
Meteor.subs.subscribe('tradepairs');
Meteor.subs.subscribe('chat');

Tracker.autorun(() => {
  let user = Meteor.user();
  if (user) {
    Meteor.subs.subscribe('balances');
    Meteor.subs.subscribe('wallets');
    Meteor.subs.subscribe('notifications');
    Meteor.subs.subscribe('transactions');
    Meteor.subs.subscribe('withdrawals');
    Meteor.subs.subscribe('waddressbook');
    Meteor.subs.subscribe('myOrders');
    if (user.isAdmin()) {
      Meteor.subs.subscribe('currenciesAdmin');
      Meteor.subs.subscribe('tradepairsAdmin');
    }
  }
});

Tracker.autorun(() => {
  let route = FlowRouter.current();
  if (route.path.match(/^\/pair/)) {
    Meteor.subs.subscribe('orderbook', null, route.params.pair_id);
    Meteor.subs.subscribe('trades', null, route.params.pair_id);
  }
});
