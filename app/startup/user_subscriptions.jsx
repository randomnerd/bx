Meteor.subs = new SubsManager();

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
