Meteor.startup(function() {
  Meteor.publish('currencies', function () {
    return Currencies.find({public: true});
  });

  Meteor.publish('currenciesAdmin', function () {
    return Currencies.find({});
  });
});
