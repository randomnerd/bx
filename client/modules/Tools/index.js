import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';

export async function subsReady({input, state, output, services}) {
  Tracker.autorun(() => {
    if (services.subsManager && services.subsManager.ready()) {
      output.success();
    }
  });
}; subsReady.async = true;

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

function setAddress ({input, state}) {
  state.set('tools.address', input.address);
}

function unsetAddress ({input, state}) {
  state.set('tools.address', null);
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

function resetDrag ({input, state}) {
  if(input.action && input.action == 'off'){
    state.set('tools.dragReset', false);
  }else if(input.action && input.action == 'on'){
    state.set('tools.dragReset', true);
  }else{
    state.set('tools.dragReset', !state.get('tools.dragReset'));
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

const setaddress = [
  setAddress
];

const unsetaddress = [
  unsetAddress
];

const dragToggle = [
  drag
];
const dragReset = [
  resetDrag
];

function setLoadingFn({input, state}) {
  state.set('loading', input.loading);
}

const setLoading = [ setLoadingFn ];

export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      mobile: false,
      panel: false,
      chat: false,
      withdraw: false,
      addressbook: false,
      address: null,
      drag: false,
      dragReset: false,
    });

    module.addSignals({
      windowWidth,
      infoPanel,
      chat,
      withdraw,
      addressbook,
      setaddress,
      unsetaddress,
      dragToggle,
      dragReset,
      setLoading
    });


    let readyTimer = null;
    let readyFn = () => {
      //console.log('loading', false);
      module.getSignals().setLoading({loading: false});
      readyTimer = null;
    };

    Meteor.startup(() => {
      Tracker.autorun(() => {
        if (!Meteor.subs.ready()) {
          if (controller.get('loading')) return;
          //console.log('loading', true);
          return module.getSignals().setLoading({loading: true});
        }
        if (readyTimer) Meteor.clearTimeout(readyTimer);
        readyTimer = Meteor.setTimeout(readyFn, 100);
      });
    });
  }
}
