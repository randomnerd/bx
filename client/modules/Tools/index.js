import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function setMobile ({input, state}) {
  state.set('mobile',($('body').width() > 680) ? false : true);
}

function panel ({input, state}) {
  //console.log(state.get('tools.panel'));
  state.set('tools.panel', !state.get('tools.panel'));
}

function showChat ({input, state}) {
  //console.log(state.get('tools.panel'));
  state.set('tools.chat', !state.get('tools.chat'));
}

const windowWidth = [
  setMobile
];

const infoPanel = [
  panel
];

const chat = [
  showChat
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      mobile: false,
      panel: false,
      chat: false
    });

    module.addSignals({
      windowWidth,
      infoPanel,
      chat
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
