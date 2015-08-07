Meteor.startup(function() {
  Meteor.publish('tradepairs', function () {
    return TradePairs.find({public: true});
  });

  Meteor.publish('tradepairsAdmin', function () {
    return TradePairs.find({});
  });
});
