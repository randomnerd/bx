import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Devtools from 'cerebral-module-devtools';

import router from './router';
import User from './modules/User';
import Page from './modules/Page';
import Admin from './modules/Admin';

const model = Model({});
const controller = Controller(model);
controller.addModules({
  devtools: Devtools(),
  user: User(),
  page: Page(),
  admin: Admin(),
  router
});

export default controller;
