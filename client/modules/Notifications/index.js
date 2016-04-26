import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function delAllNotif ({input, state}) {
  state.set('notif.delAll', true);
}

function delNotif ({input, state}) {
  state.set('notif.delOne', input.id);
}

function newNotif ({input, state}) {
  state.set('notif.newOne', input);
}

function clearNewNotif ({input, state}) {
  state.set('notif.newOne', false);
}

function newTime ({input, state}) {
  state.set('notif.changeTime', true);
}

const delAll = [
  delAllNotif
];

const delOne = [
  delNotif
];

const newOne = [
  newNotif
];

const clearNew = [
  clearNewNotif
];

const changeTime = [
  newTime
];


export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      delAll: false,
      delOne: false,
      newOne: false,
      //page: "home"
    });

    module.addSignals({
      delAll,
      delOne,
      newOne,
      clearNew,
      changeTime
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
