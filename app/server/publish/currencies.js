import {Currencies} from 'app/collections';

Meteor.publish('currencies', function () {
  return Currencies.find({published: true});
});

Meteor.publish('currenciesAdmin', function () {
  return Currencies.find({});
});