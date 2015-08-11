FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {active:false, content: <Home /> });
  }
});

FlowRouter.route('/pair/:pair_id', {
  action(params) {
    ReactLayout.render(MainLayout, {active:params.pair_id, content: <TradePage active={params.pair_id}/> });
  }
});

FlowRouter.route('/u/wallets', {
  action() {
    ReactLayout.render(MainLayout, { content: <WalletsPage /> })
  }
});

adminRoutes = FlowRouter.group({ prefix: '/admin' });

adminRoutes.route('/', {
  action() {
    ReactLayout.render(AdminLayout, { content: <AdminHome /> })
  }
});

adminRoutes.route('/currencies', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
  },
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrenciesAdmin /> })
  }
});

adminRoutes.route('/currencies/new', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
  },
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm k={Math.random()} /> })
  }
});

adminRoutes.route('/currencies/edit/:shortName', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
  },
  action(params) {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm current={params.shortName} />  })
  }
});

adminRoutes.route('/tradepairs', {
  subscriptions() {
    this.register('tradepairsAdmin', Meteor.subscribe('tradepairsAdmin'));
  },
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairAdmin /> })
  }
});

adminRoutes.route('/tradepairs/new', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
    this.register('tradepairsAdmin', Meteor.subscribe('tradepairsAdmin'));
  },
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairForm k={Math.random()} /> })
  }
});

adminRoutes.route('/tradepairs/edit/:shortName', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
    this.register('tradepairsAdmin', Meteor.subscribe('tradepairsAdmin'));
  },
  action(params) {
    ReactLayout.render(AdminLayout, { content: <TradePairForm current={params.shortName} />  })
  }
});
