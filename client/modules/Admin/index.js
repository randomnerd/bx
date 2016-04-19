import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function goHome ({input, state}) {
  state.set('page', "admin");
  state.set('layout', "admin");
}

function goCurrs ({input, state}) {
  state.set('page', "currencies");
  state.set('layout', "admin");
}

function goCurrsNew ({input, state}) {
  state.set('page', "currency");
  state.set('curr', null);
  state.set('layout', "admin");
}

function goCurrsEdit ({input, state}) {
  state.set('page', "currency");
  state.set('curr', input.id);
  state.set('layout', "admin");
}


function goPairs ({input, state}) {
  state.set('page', "tradepairs");
  state.set('layout', "admin");
}

function goPairsNew ({input, state}) {
  state.set('page', "tradepair");
  state.set('pair', null);
  state.set('layout', "admin");
}

function goPairsEdit ({input, state}) {
  state.set('page', "tradepair");
  state.set('adm_pair', input.id);
  state.set('layout', "admin");
}

const home = [
  goHome
];

const adminCurrs = [
  goCurrs
];

const adminCurrsNew = [
  goCurrsNew
];
const adminCurrsEdit = [
  goCurrsEdit
];

const adminPairs = [
  goPairs
];

const adminPairsNew = [
  goPairsNew
];
const adminPairsEdit = [
  goPairsEdit
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      layout: "admin",
      page: "home"
    });

    module.addSignals({
      home,
      adminCurrsNew,
      adminCurrsEdit,
      adminCurrs,
      adminPairs,
      adminPairsNew,
      adminPairsEdit,
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
