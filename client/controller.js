import Controller from 'cerebral';
import Model from 'cerebral-model-baobab';
import Devtools from 'cerebral-module-devtools';

import router from './router';
import User from './modules/User';

const model = Model({});
const controller = Controller(model);
controller.addModules({
  devtools: Devtools(),
  user: User(),
  router
});

export default controller;
