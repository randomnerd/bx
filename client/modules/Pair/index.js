import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {TradePairs, Currencies} from '/both/collections';
import {subsReady} from '../Tools';


function showPair ({input, state, output, services}) {
  services.subsManager.subscribe('trades', null, input.id);
  services.subsManager.subscribe('orderbook', null, input.id);
  services.subsManager.subscribe('chartitems', null, input.id);
  state.set('pair_link', input.id);
  state.set('layout', "main");
  if (state.get('mobile')) state.set('mob.page', 'buysell');
  state.set('page', "pair");
}

function setPairObj ({input, state}) {
  state.set(['pair', 'pair'], input.pair);
}

function setBuySell ({input, state}) {
  let {price, amount} = input;
  if (parseFloat(price)) state.set(['pair', 'buysell', 'price'], Math.abs(parseFloat(price)));
  if (parseFloat(amount)) state.set(['pair', 'buysell', 'amount'], Math.abs(parseFloat(amount)));
}

const show = [
  showPair
  // [
  //   subsReady, {
  //     success: [showPair]
  //   }
  // ]

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
