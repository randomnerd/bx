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
}

function goSettings ({input, state}) {
  state.set('page', "settings");
  state.set('layout', "main");
}


function goPassword ({input, state}) {
  state.set('page', "password");
  state.set('layout', "main");
}

function goPairsNew ({input, state}) {
  state.set('page', "tradepair");
  state.set('pair', null);
  state.set('layout', "admin");
}

const home = [
  goHome
];

const wallets = [
  goWallets
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

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      layout: "main",
      page: "home"
    });

    module.addSignals({
      //home,
      wallets,
      settings,
      password,
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
