import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {TradePairs} from '/both/collections';
import {subsReady} from '../Tools';

function tradesSubs({input, state, output, services}) {
  let pairs = TradePairs.find({published: true}).fetch();
  for (let pair of pairs){
    services.subsManager.subscribe('trades', pair._id);
    services.subsManager.subscribe('orderbook', pair._id);
  }
}

function goHome ({input, state}) {
  state.set('page', "home");
  state.set('layout', "home");
  state.set('pair_link', null);
  state.set('title', "Digital Assets Online Stock");

}

function goBitx ({input, state, output, services}) {
  let pair = TradePairs.findOne({permalink: input.id});
  if (!pair) return;
  state.set(['pair', 'pair'], pair);
  state.set('page', "bitindex");
  state.set('layout', "home");
  services.subsManager.subscribe('chartitems', pair._id);
}

const home = [
  subsReady, {
    success: [
      tradesSubs,
      subsReady, {
        success: [goHome]
      }
    ]
  }
];

const bitx = [
  subsReady, {
    success: [
      goBitx
    ]
  }
];



export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      page: "home"
    });

    module.addSignals({
      home,
      bitx
    });
  }
}
