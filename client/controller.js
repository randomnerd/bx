import {Meteor} from 'meteor/meteor';
import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Devtools from 'cerebral-module-devtools';

import router from './router';
import Mob from './modules/Mob';
import User from './modules/User';
import Page from './modules/Page';
import Admin from './modules/Admin';
import Tools from './modules/Tools';
import Pair from './modules/Pair';
import Notifications from './modules/Notifications';
import U from './modules/U';

const subsManager = new SubsManager({cacheLimit: 100});
Meteor.subs = subsManager;

subsManager.subscribe('currencies');
subsManager.subscribe('tradepairs');
subsManager.subscribe('chat');
subsManager.subscribe('currtypes');
subsManager.subscribe('pairtypes');
subsManager.subscribe('pairgroups');

Tracker.autorun(() => {
  let user = Meteor.user();
  if (user) {
    subsManager.subscribe('balances');
    subsManager.subscribe('wallets');
    subsManager.subscribe('notifications');
    subsManager.subscribe('transactions');
    subsManager.subscribe('withdrawals');
    subsManager.subscribe('waddressbook');
    subsManager.subscribe('myOrders');
    if (user.isAdmin()) {
      subsManager.subscribe('currenciesAdmin');
      subsManager.subscribe('tradepairsAdmin');
      subsManager.subscribe('currtypesAdmin');
      subsManager.subscribe('pairtypesAdmin');
      subsManager.subscribe('pairgroupsAdmin');
    }
  }
});

const model = Model({});
const controller = Controller(model);
controller.addModules({
  devtools: Devtools(),
  mob: Mob(),
  user: User(),
  page: Page(),
  admin: Admin(),
  tools: Tools(),
  pair: Pair(),
  notif: Notifications(),
  u: U(),
  router
});
controller.addServices({
  subsManager
})

export default controller;
