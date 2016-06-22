import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function goHome ({input, state}) {
  state.set('page', "admin");
  state.set('layout', "admin");
}

function goWallets ({input, state}) {
  state.set('page', "wallets");
  state.set('layout', "main");
  if(state.get('mobile')){state.set('mob.page', false);}
}

function goWallet ({input, state}) {
  state.set('page', "wallet");
  state.set('wallet', input.id);
  state.set('layout', "main");
  if(state.get('mobile')){state.set('mob.page', false);}
}

function setWallet ({input, state}) {
  state.set('wallet', input.id);
}


function goSettings ({input, state}) {
  state.set('page', "settings");
  state.set('layout', "main");
  if(state.get('mobile')){state.set('mob.page', false);}
}


function goPassword ({input, state}) {
  state.set('page', "password");
  state.set('layout', "main");
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
  state.set('layout', "main");
}

const home = [
  goHome
];

const wallets = [
  goWallets
];

const wallet = [
  goWallet
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
      notifications
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
