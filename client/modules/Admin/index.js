import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {subsReady} from '../Tools';


function goHome ({input, state}) {
  state.set('page', "admin");
  state.set('layout', "admin");
  state.set('pair_link', null);
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
  state.set('adm_pair', null);
  state.set('layout', "admin");
}

function goPairsEdit ({input, state}) {
  state.set('page', "tradepair");
  state.set('adm_pair', input.id);
  state.set('layout', "admin");
}

function goCurrTypes ({input, state}) {
  state.set('page', "currtypes");
  state.set('layout', "admin");
}

function goCurrTypesNew ({input, state}) {
  state.set('page', "currtype");
  state.set('currtype', null);
  state.set('layout', "admin");
}

function goCurrTypesEdit ({input, state}) {
  state.set('page', "currtype");
  state.set('currtype', input.id);
  state.set('layout', "admin");
}


function goPairTypes ({input, state}) {
  state.set('page', "pairtypes");
  state.set('layout', "admin");
}

function goPairTypesNew ({input, state}) {
  state.set('page', "pairtype");
  state.set('pairtype', null);
  state.set('layout', "admin");
}

function goPairTypesEdit ({input, state}) {
  state.set('page', "pairtype");
  state.set('pairtype', input.id);
  state.set('layout', "admin");
}

function goPairGroups ({input, state}) {
  state.set('page', "pairgroups");
  state.set('layout', "admin");
}

function goPairGroupsNew ({input, state}) {
  state.set('page', "pairgroup");
  state.set('pairgroup', null);
  state.set('layout', "admin");
}

function goPairGroupsEdit ({input, state}) {
  state.set('page', "pairgroup");
  state.set('pairgroup', input.id);
  state.set('layout', "admin");
}

function getUsers ({input, state, services}) {
  if (!input.pageNum || parseInt(input.pageNum) < 1) input.pageNum = 1;
  services.subsManager.subscribe('usersAdmin', parseInt(input.pageNum));
}

function getUser ({input, state, services}) {
  if (!input.id) input.id = '';
  services.subsManager.subscribe('userAdmin', input.id);
  services.subsManager.subscribe('balancesAdmin', input.id);
  services.subsManager.subscribe('walletsAdmin', input.id);
  services.subsManager.subscribe('adminUserTrades', input.id, 20, 0);
}

function goUsers ({input, state}) {
  state.set('page', "users");
  state.set('pageNum', input.pageNum)
  state.set('thisUserId', null);
  state.set('layout', "admin");
}

function goUser ({input, state}) {
  state.set('page', "user");
  state.set('thisUserId', input.id);
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

const adminCurrTypes = [
  goCurrTypes
];

const adminCurrTypesNew = [
  goCurrTypesNew
];
const adminCurrTypesEdit = [
  goCurrTypesEdit
];

const adminPairTypes = [
  goPairTypes
];

const adminPairTypesNew = [
  goPairTypesNew
];
const adminPairTypesEdit = [
  goPairTypesEdit
];

const adminPairGroups = [
  goPairGroups
];

const adminPairGroupsNew = [
  goPairGroupsNew
];
const adminPairGroupsEdit = [
  goPairGroupsEdit
];

const adminUsers = [
  getUsers,
  [subsReady, {
    success: [goUsers]
  }]
];
const adminUser = [
  getUser,
  [subsReady, {
    success: [goUser]
  }]
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
      adminCurrTypesNew,
      adminCurrTypesEdit,
      adminCurrTypes,
      adminPairTypes,
      adminPairTypesNew,
      adminPairTypesEdit,
      adminPairGroups,
      adminPairGroupsNew,
      adminPairGroupsEdit,
      adminUsers,
      adminUser
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
