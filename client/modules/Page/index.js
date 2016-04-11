import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function goHome ({input, state}) {
  state.set('page', "home");
  state.set('layout', "home");
}



const home = [
  goHome
];



export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      page: "home"
    });

    module.addSignals({
      home,
      // admin,
      // adminCurrs,
      // adminPairs,
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
