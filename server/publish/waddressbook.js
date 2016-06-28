import {wAddressBook} from '/both/collections';

Meteor.publish('waddressbook', function() {
  if (!this.userId) return false;
  return wAddressBook.find({userId: this.userId});
});
