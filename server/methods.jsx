Meteor.methods({
  'jobs/wallet/newWallet': (currId) => {
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    var job = new Job(Jobs, 'newAddress', {
      currId: currId,
      userId: Meteor.userId()
    });
    job.save();
  }
});
