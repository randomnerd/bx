import { check } from 'meteor/check';
import {Currencies, Notifications, wAddressBook, Chat, Withdrawals} from '/both/collections';
import {Jobs} from '../job_collection';
import notp from 'notp';

Meteor.methods({
  'jobs/wallet/newWallet': (currId) => {
    check(currId, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    let job = new Job(Jobs, 'newAddress', { currId, userId: Meteor.userId() });
    job.save();
  },

  'notifications/del': (_id) => {
    check(_id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    Notifications.update({ _id, userId: Meteor.userId() }, { $set: { ack: true } });
  },

  'notifications/del_realy': (_id) => {
    check(_id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    Notifications.remove({_id});
  },

  'notifications/clear_all': () => {
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    Notifications.remove({ userId: Meteor.userId() });
  },

  'notifications/add': () => {
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    let arr = [
      { userId: Meteor.userId(), type: 'warning', title: 'Password changed!', message: 'A dropdown can include a search prompt inside its menu', ack: false, createdAt: new Date() },
      { userId: Meteor.userId(), type: 'accept', title: 'Your password changed!', message: 'A dropdown menu can appear to be floating below an element.', ack: false, createdAt: new Date() },
      { userId: Meteor.userId(), type: 'info', title: 'You won an one million dollars!', message: 'menu can contain dividers to separate related content.', ack: false, createdAt: new Date() },
      { userId: Meteor.userId(), type: 'chat', title: 'Your password changed!', message: 'A dropdown menu can appear to be floating below an element.', ack: false, createdAt: new Date() },
      { userId: Meteor.userId(), type: 'error', title: 'You won an one million dollars!', message: 'menu can contain dividers to separate related content.', ack: false, createdAt: new Date() },
    ]

    for (let item of arr) Notifications.insert(item);
  },

  'address/add': function(address) {
    check(address, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    address.userId = Meteor.userId();
    wAddressBook.insert(address);
  },

  "address/update": function(id, address) {
    check(id, String);
    check(address, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    wAddressBook.update(id, { $set: { address } });
  },

  'address/remove': function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    wAddressBook.remove(id);
  },

  'chat/add': function(message) {
    check(message, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    message.userId = Meteor.userId()
    message.userName = Meteor.user().displayName();
    message.createdAt = new Date()
    if (message.replyId) {
      let replyUser = Meteor.users.findOne({_id: message.replyId});
      if (!replyUser) throw new Meteor.Error('wrong replyId');
      message.replyName = replyUser.displayName();
    }
    Chat.insert(message);
  },

  "userblocs/update": function(blocs) {
    check(blocs, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');

    Meteor.users.update(Meteor.userId(), { $set: { profile: { blocs } } });
  },

  withdraw: function(params) {
    check(params, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!params.amount || parseFloat(params.amount) <= 0) throw new Meteor.Error('wrong amount');
    let curr = Currencies.findOne(params.currId);

    let user = Meteor.user();
    if (user.totpKey && user.totpEnabled) {
      if (!params.totp) throw new Meteor.Error('TOTP required');
      if (!notp.totp.verify(params.totp, user.totpKey)) throw new Meteor.Error('wrong TOTP token');
    }

    let amount = Math.round(parseFloat(params.amount) * Math.pow(10, 8));
    let balance = user.balanceFor(params.currId);
    if (!balance || balance.amount < amount) throw new Meteor.Error('wrong amount');

    Withdrawals.insert({
      userId: Meteor.userId(),
      currId: params.currId,
      address: params.address,
      fee: parseFloat(curr.withdrawalFee) * Math.pow(10, 8),
      amount: parseFloat(params.amount) * Math.pow(10, 8),
      state: 'initial',
      createdAt: new Date()
    });
  }

});
