Meteor.startup(function() {
  Meteor.publish('waddressbook', function () {
    return wAddressBook.find({userId: this.userId});
  });

  Meteor.publish('waddressbookAdmin', function () {
    return wAddressBook.find({});
  });
});
