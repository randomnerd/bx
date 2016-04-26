import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function showMenu ({input, state}) {
  state.set('mob.menu', !state.get('mob.menu'));
}

function showPage ({input, state}) {
  state.set('mob.page', input.id);
  state.set('mob.menu', false);
}

const menu = [
  showMenu
];

const page = [
  showPage
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      menu: false,
      page: 'chat' //'buysell', 'history', 'orders', 'chat'

    });

    module.addSignals({
      menu,
      page
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
