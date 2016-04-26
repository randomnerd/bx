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

export default controller;
