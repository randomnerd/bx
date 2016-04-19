import {Meteor} from 'meteor/meteor';
import {Accounts} from 'meteor/accounts-base';
import {Tracker} from 'meteor/tracker';
import {User} from '/both/models';


function setMobile ({input, state}) {
  //console.log($('html').width(320));
  console.log($('body').width());
  state.set('mobile',($('body').width() > 680) ? false : true);
}

const windowWidth = [
  setMobile
];


export default (options = {}) => {
  return (module, controller) => {
    module.addState({
      mobile: false,
      //page: "home"
    });

    module.addSignals({
      windowWidth,
    });

    // Tracker.autorun(() => {
    //   module.getSignals().loggedInUpdated({loggingIn: Accounts.loggingIn()});
    // });
    // Tracker.autorun(() => {
    //   module.getSignals().userChanged({user: Meteor.user() || {}});
    // });
  }
}
