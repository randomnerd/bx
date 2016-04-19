import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function showPair ({input, state}) {
  state.set('page', "pair");
  state.set('layout', "main");
  state.set('pair', input.id);
}


const show = [
  showPair
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      layout: "main",
    });

    module.addSignals({
      show,
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
