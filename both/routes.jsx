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

FlowRouter.route('/BitIndex', {
  subscriptions() {

    this.register('BTTC', Meteor.subscribe('BitIndexIndicator_BTTC'));
    this.register('BTTN', Meteor.subscribe('BitIndexIndicator_BTTN'));
    this.register('BTPR', Meteor.subscribe('BitIndexIndicator_BTPR'));
    this.register('BTUA', Meteor.subscribe('BitIndexIndicator_BTUA'));

  },
  action() {
    ReactLayout.render(MainLayout, {content: <BitIndex /> });
  }
});

FlowRouter.route('/u/wallets', {
  subscriptions() {
    this.register('wallets', Meteor.subscribe('wallets'));
    this.register('currencies', Meteor.subscribe('currencies'));
    this.register('waddressbook', Meteor.subscribe('waddressbook'));
  },
  action() {
    ReactLayout.render(MainLayout, { content: <WalletsPage /> })
  }
});
FlowRouter.route('/u/wallet/:w_id', {
  subscriptions() {
    this.register('currencies', Meteor.subscribe('currencies'));
    this.register('transactions', Meteor.subscribe('transactions'));
  },
  action(params) {
    ReactLayout.render(MainLayout, { content: <TransactionsPage current={params.w_id} /> })
  }
});

FlowRouter.route('/u/settings', {
  subscriptions() {
    //this.register('currencies', Meteor.subscribe('currencies'));
  },
  action() {
    ReactLayout.render(MainLayout, { content: <SettingsPage /> })
  }
});

FlowRouter.route('/u/password', {
  subscriptions() {
    //this.register('currencies', Meteor.subscribe('currencies'));
  },
  action() {
    ReactLayout.render(MainLayout, { content: <PasswordPage /> })
  }
});

FlowRouter.route('/u/notifications', {
  subscriptions() {
    this.register('notifications', Meteor.subscribe('notifications'));
  },
  action() {
    ReactLayout.render(MainLayout, { content: <NotificationPage /> })
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
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
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

adminRoutes.route('/tradepairs/edit/:p_id', {
  subscriptions() {
    this.register('currenciesAdmin', Meteor.subscribe('currenciesAdmin'));
    this.register('tradepairsAdmin', Meteor.subscribe('tradepairsAdmin'));
  },
  action(params) {
    ReactLayout.render(AdminLayout, { content: <TradePairForm current={params.p_id} />  })
  }
});
