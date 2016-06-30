import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {TradePairs} from '/both/collections';
import {set, copy} from 'cerebral-addons';
import {subsReady} from '../Tools';


function showPair ({input, state, output, services}) {
  state.set('page', "pair");
  state.set('layout', "main");
  state.set('pair_link', input.id);
  if (state.get('mobile')) state.set('mob.page', 'buysell');
  let pair = TradePairs.findOne({permalink: input.id});

  if (!pair) return;
  services.subsManager.subscribe('trades', pair._id);
  services.subsManager.subscribe('orderbook', pair._id);
  services.subsManager.subscribe('chartitems', pair._id);
  state.set(['pair', 'pair'], pair);
}

function setPairObj ({input, state}) {
  state.set(['pair', 'pair'], input.pair);
}

function setBuySell ({input, state}) {
  state.set(['pair', 'buysell', 'price'], Math.abs(parseFloat(input.price)));
  state.set(['pair', 'buysell', 'amount'], Math.abs(parseFloat(input.amount)));
}

const show = [
  [
    subsReady, {
      success: [showPair]
    }
  ]

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
        price: 0,
        amount: 0
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
