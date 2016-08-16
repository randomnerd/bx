import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {subsReady} from '../Tools';
import {TradePairs, Currencies} from '/both/collections';


function goHome ({input, state}) {
  state.set('page', "admin");
  state.set('layout', "admin");
}

function goWallets ({input, state}) {
  state.set('page', "wallets");
  state.set('layout', "main");
  state.set('title', "My wallets - Digital Assets Online Stock");
  if(state.get('mobile')){state.set('mob.page', false);}
}

function goWallet ({input, state}) {
  state.set('page', "wallet");
  state.set('wallet', input.id);
  state.set('layout', "main");
  let curr = Currencies.findOne({_id: input.id});
  state.set('title',  `My ${curr.shortName} wallet - Digital Assets Online Stock`);
  if(state.get('mobile')){state.set('mob.page', false);}
}

function getWalletTrades({input, state, output, services}) {
  services.subsManager.subscribe('wallet_trades', input.id);
}

function setWallet ({input, state}) {
  state.set('wallet', input.id);
}


function goSettings ({input, state}) {
  state.set('page', "settings");
  state.set('layout', "main");
  state.set('title', "My settings - Digital Assets Online Stock");
  if(state.get('mobile')){state.set('mob.page', false);}
}


function goPassword ({input, state}) {
  state.set('page', "password");
  state.set('layout', "main");
  state.set('title', "Change password - Digital Assets Online Stock");
  if(state.get('mobile')){state.set('mob.page', false);}
}

function goPairsNew ({input, state}) {
  state.set('page', "tradepair");
  state.set(['pair', 'pair'], null);
  state.set('layout', "admin");
}

function goNotifs ({input, state}) {
  state.set('page', "notifications");
  state.set(['pair', 'pair'], null);
  state.set('title', "My notifications - Digital Assets Online Stock");
  state.set('layout', "main");
}

function goHistory ({input, state, output, services}) {
  services.subsManager.subscribe( 'uTrades', 40, 0 );
  state.set('title', "My trade history - Digital Assets Online Stock");
  state.set('page', "history");
  state.set(['pair', 'pair'], null);
  state.set('layout', "main");
}

function loadHistory ({input, state, output, services}) {
  services.subsManager.subscribe('uTrades', input.limit || 40, input.skip || 0, input.pair);

}

const home = [
  goHome
];

const wallets = [
  goWallets
];

const wallet = [
  getWalletTrades,
  [subsReady, {
    success:  [goWallet]
  }]

];

const walletSet = [
  setWallet
];

const settings = [
  goSettings
];

const password = [
  goPassword
];

const adminPairsNew = [
  goPairsNew
];

const notifications = [
  goNotifs
];

const history = [
  [
    subsReady, {
      success: [goHistory]
    }
  ]
];

const getHistory = [
  [
    subsReady, {
      success: [loadHistory]
    }
  ]
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      layout: "main",
      page: "home"
    });

    module.addSignals({
      //home,
      wallets,
      wallet,
      settings,
      password,
      walletSet,
      notifications,
      history,
      getHistory
      // pair
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
