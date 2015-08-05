Jobs = JobCollection('jobQueue');
Jobs.allow({
  admin: function(userId, method, params) {
    return (userId ? true : false);
  }
});

Meteor.startup(function() {
  Meteor.publish('jobQueue', function() {
    return Jobs.find({status: {$ne: 'completed'}});
  });

  return Jobs.startJobServer();
});
