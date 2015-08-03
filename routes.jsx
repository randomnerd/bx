FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, { content: <Home /> });
  }
})
FlowRouter.route('/pair/:pair_id', {
  action(params, queryParams) {
    ReactLayout.render(MainLayout, { content: <PairLayout active={params.pair_id}/> });
  }
})
