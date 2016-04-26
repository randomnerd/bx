import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';
import {set, copy} from 'cerebral-addons';


function showPair ({input, state}) {
  state.set('page', "pair");
  state.set('layout', "main");
  state.set('pair_link', input.id);
  if(state.get('mobile')){state.set('mob.page', 'buysell');}
}

function setPairObj ({input, state}) {
  state.set('pair.pair', input.pair);
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

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      layout: "main",
      pair_link: null,
      pair: null
    });

    module.addSignals({
      show,
      setPair
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
