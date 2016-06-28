import {Currencies} from '../../both/collections';

Meteor.publish('currencies', function() {
  return Currencies.find({published: true});
});

Meteor.publish('currenciesAdmin', function() {
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');

  return Currencies.find({});
});
