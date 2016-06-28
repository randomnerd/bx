import {Currencies} from '../../both/collections';

Meteor.publish('currencies', function() {
  return Currencies.find({published: true});
});

Meteor.publish('currenciesAdmin', function() {
  if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');
  
  return Currencies.find({});
});
