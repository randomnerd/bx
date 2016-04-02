import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import '../../../both/models';
function updateUser ({input, state}) {
  state.set('user', (input.user || Meteor.user()));
}

function updateLoggingIn ({input, state}) {
  state.set('loggingIn', (input.loggingIn || Accounts.loggingIn()));
}

function updateAdmin ({input, state}) {
  state.set('admin', Meteor.user() && Meteor.user().isAdmin());
}

function showSignUpModal ({input, state}) {
  state.set('showSignUpModal', true);
}

function hideSignUpModal ({input, state}) {
  state.set('showSignUpModal', false);
}

function showLoginModal ({input, state}) {
  state.set('showLoginModal', true);
}

function hideLoginModal ({input, state}) {
  state.set('showLoginModal', false);
}

const userChanged = [
  updateUser, updateAdmin
];
const loggedInUpdated = [
  updateLoggingIn
];
const signUpClicked = [
  showSignUpModal
];
const signUpDone = [
  hideSignUpModal
];
const loginClicked = [
  showLoginModal
];
const loginDone = [
  hideLoginModal
];


export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      user: Meteor.user(),
      loggingIn: Accounts.loggingIn()
    });

    module.addSignals({
      userChanged,
      loggedInUpdated,
      signUpClicked,
      signUpDone,
      loginClicked,
      loginDone
    });

    Tracker.autorun(() => {
      module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    });
    Tracker.autorun(() => {
      module.getSignals().userChanged({user: Meteor.user()});
    });
  }
}
