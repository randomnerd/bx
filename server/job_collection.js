Jobs = JobCollection('jobQueue');
Jobs.allow({
  admin: function(userId, method, params) {
    return (userId ? true : false);
  }
});

Meteor.startup(function() {
  Meteor.publish('allJobs', function() {
    return Jobs.find({});
  });

  return Jobs.startJobServer();
});
