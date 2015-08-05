FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {active:false, content: <Home /> });
  }
});

FlowRouter.route('/pair/:pair_id', {
  action(params, queryParams) {
    ReactLayout.render(MainLayout, {active:params.pair_id, content: <TradePage active={params.pair_id}/> });
  }
});

FlowRouter.route('/u/wallets', {
  action() {
    ReactLayout.render(MainLayout, { content: <WalletsPage /> })
  }
});
