import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {TradePairs} from '/both/collections';
import {set, copy} from 'cerebral-addons';


function showPair ({input, state}) {
  state.set('page', "pair");
  state.set('layout', "main");
  state.set('pair_link', input.id);
  let pair = TradePairs.findOne({permalink: input.id});
  state.set('pair.pair', pair);
  if(state.get('mobile')){state.set('mob.page', 'buysell');}
}

function setPairObj ({input, state}) {
  state.set('pair.pair', input.pair);
}

function setBuySell ({input, state}) {
  state.set('pair.buysell.price', input.price);
  state.set('pair.buysell.amount', input.amount);
}

const show = [
  showPair
  // set("pair", 'state:/page'),
  // set("main", 'state:/layout'),
  // copy('input:/id', 'state:/pair_link')
];

const setPair = [
  setPairObj
  //copy('input:/pair', 'state:/pair')
];

const setBuysell = [
  setBuySell
  //copy('input:/pair', 'state:/pair')
];


export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      pair: null,
      buysell: {
        price: null,
        amount: null
      }
    });

    module.addSignals({
      show,
      setPair,
      setBuysell
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
