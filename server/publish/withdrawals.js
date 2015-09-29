Meteor.startup(function() {
  Meteor.publish('withdrawalQueue', function () {
    // TODO: authorize worker
    return Withdrawals.find({state: 'initial'});
  });

});
