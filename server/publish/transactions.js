Meteor.startup(function() {
  Meteor.publish('transactions', function () {
    // TODO: authorize worker
    return Transactions.find({userId:this.userId});
  });

});
