import React from 'react';
import ReactLayout from 'app/lib/react_layout';
import AdminLayout from 'app/components/layouts/admin_layout';
import MainLayout from 'app/components/layouts/main_layout';
import Home from 'app/components/home';
import AdminHome from 'app/components/admin/home';
import TradePage from 'app/components/trade/tradePage';
import WalletsPage from 'app/components/user/wallets';
import SettingsPage from 'app/components/user/settings';
import PasswordPage from 'app/components/user/password';
import TransactionsPage from 'app/components/transactions';
import NotificationsPage from 'app/components/user/notifications_page';
import CurrenciesAdmin from 'app/components/admin/currencies';
import CurrencyForm from 'app/components/admin/currency_form';
import TradePairAdmin from 'app/components/admin/TradePairs';
import TradePairForm from 'app/components/admin/tradepair_form';
import TradeGrid from 'app/components/trade/trade_grid';

FlowRouter.route('/', {
  action() {
    ReactLayout.render(MainLayout, {active:false, content: <Home /> });
  }
});

FlowRouter.route('/pair/:pair_id', {
  action(params) {
    ReactLayout.render(MainLayout, {active:params.pair_id, content: <TradeGrid active={params.pair_id}/> });
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
    ReactLayout.render(MainLayout, { content: <NotificationsPage /> })
  }
});

let adminRoutes = FlowRouter.group({ prefix: '/admin' });

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

FlowRouter.initialize();
