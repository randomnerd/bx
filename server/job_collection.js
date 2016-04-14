export const Jobs = JobCollection('jobQueue', {noCollectionSuffix: true});
Jobs.allow({
  admin: function(userId, method, params) {
    return (userId ? true : false);
  }
});

Meteor.publish('jobQueue', function() {
  return Jobs.find({status: 'ready'});
});

Jobs.startJobServer();
