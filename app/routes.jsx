import React from 'react';
import ReactLayout from 'lib/react_layout';
import AdminLayout from 'components/layouts/admin_layout';
import MainLayout from 'components/layouts/main_layout';
import Home from 'components/home';
import AdminHome from 'components/admin/home';
import TradePage from 'components/trade/tradePage';
import WalletsPage from 'components/user/wallets';
import SettingsPage from 'components/user/settings';
import PasswordPage from 'components/user/password';
import TransactionsPage from 'components/transactions';
import NotificationsPage from 'components/user/notifications_page';
import CurrenciesAdmin from 'components/admin/currencies';
import CurrencyForm from 'components/admin/currency_form';
import TradePairAdmin from 'components/admin/TradePairs';
import TradePairForm from 'components/admin/tradepair_form';
import TradeGrid from 'components/trade/trade_grid';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {active: false, content: <Home /> });
  }
});

FlowRouter.route('/pair/:pair_id', {
  action(params) {
    ReactLayout.render(MainLayout, {active: params.pair_id,
      content: <TradeGrid active = {params.pair_id}/> });
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
    ReactLayout.render(MainLayout, { content: <WalletsPage /> });
  }
});
FlowRouter.route('/u/wallet/:w_id', {
  action(params) {
    ReactLayout.render(MainLayout, { content: <TransactionsPage current={params.w_id} /> });
  }
});

FlowRouter.route('/u/settings', {
  action() {
    ReactLayout.render(MainLayout, { content: <SettingsPage /> });
  }
});

FlowRouter.route('/u/password', {
  action() {
    ReactLayout.render(MainLayout, { content: <PasswordPage /> });
  }
});

FlowRouter.route('/u/notifications', {
  action() {
    ReactLayout.render(MainLayout, { content: <NotificationsPage /> });
  }
});

let adminRoutes = FlowRouter.group({ prefix: '/admin' });

adminRoutes.route('/', {
  action() {
    ReactLayout.render(AdminLayout, { content: <AdminHome /> });
  }
});

adminRoutes.route('/currencies', {
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrenciesAdmin /> });
  }
});

adminRoutes.route('/currencies/new', {
  action() {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm k={Math.random()} /> });
  }
});

adminRoutes.route('/currencies/edit/:shortName', {
  action(params) {
    ReactLayout.render(AdminLayout, { content: <CurrencyForm current={params.shortName} />  });
  }
});

adminRoutes.route('/tradepairs', {
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairAdmin /> });
  }
});

adminRoutes.route('/tradepairs/new', {
  action() {
    ReactLayout.render(AdminLayout, { content: <TradePairForm k={Math.random()} /> });
  }
});

adminRoutes.route('/tradepairs/edit/:p_id', {
  action(params) {
    ReactLayout.render(AdminLayout, { content: <TradePairForm current={params.p_id} />  });
  }
});

FlowRouter.initialize();
