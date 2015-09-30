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
  action() {
    ReactLayout.render(MainLayout, { content: <WalletsPage /> })
  }
});
FlowRouter.route('/u/wallet/:w_id', {
  action(params) {
    ReactLayout.render(MainLayout, { content: <TransactionsPage current={params.w_id} /> })
  }
});

FlowRouter.route('/u/settings', {
  action() {
    ReactLayout.render(MainLayout, { content: <SettingsPage /> })
  }
});

FlowRouter.route('/u/password', {
  action() {
    ReactLayout.render(MainLayout, { content: <PasswordPage /> })
  }
});

FlowRouter.route('/u/notifications', {
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
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrenciesAdmin /> })
  }
});

adminRoutes.route('/currencies/new', {
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm k={Math.random()} /> })
  }
});

adminRoutes.route('/currencies/edit/:shortName', {
  action(params) {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm current={params.shortName} />  })
  }
});

adminRoutes.route('/tradepairs', {
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairAdmin /> })
  }
});

adminRoutes.route('/tradepairs/new', {
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairForm k={Math.random()} /> })
  }
});

adminRoutes.route('/tradepairs/edit/:p_id', {
  action(params) {
    ReactLayout.render(AdminLayout, { content: <TradePairForm current={params.p_id} />  })
  }
});
