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

function withdrawOpen ({input, state}) {
  if(input.action && input.action == 'close'){
    state.set('tools.withdraw', false);
  }else if(input.action && input.action == 'open'){
    state.set('tools.withdraw', true);
  }else{
    state.set('tools.withdraw', !state.get('tools.withdraw'));
  }
}

function addressBookOpen ({input, state}) {
  if(input.action && input.action == 'close'){
    state.set('tools.addressbook', false);
  }else if(input.action && input.action == 'open'){
    state.set('tools.addressbook', true);
  }else{
    state.set('tools.addressbook', !state.get('tools.addressbook'));
  }
}

function drag ({input, state}) {
  if(input.action && input.action == 'off'){
    state.set('tools.drag', false);
  }else if(input.action && input.action == 'on'){
    state.set('tools.drag', true);
  }else{
    state.set('tools.drag', !state.get('tools.drag'));
  }
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

const withdraw = [
  withdrawOpen
];

const addressbook = [
  addressBookOpen
];

const dragToggle = [
  drag
];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      mobile: false,
      panel: false,
      chat: false,
      withdraw: false,
      addressbook: false
    });

    module.addSignals({
      windowWidth,
      infoPanel,
      chat,
      withdraw,
      addressbook,
      dragToggle
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
