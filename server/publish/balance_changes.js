Meteor.startup(function() {
  Meteor.publish('balanceChangeQueue', function () {
    // TODO: authorize worker
    return BalanceChanges.find({state: 'initial'});
  });

});
