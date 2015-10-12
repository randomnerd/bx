import {wAddressBook} from 'collections';

Meteor.publish('waddressbook', function () {
  if (!this.userId) return false;
  return wAddressBook.find({userId: this.userId});
});

Meteor.publish('waddressbookAdmin', function () {
  if (!this.userId) return false;
  return wAddressBook.find({});
});
