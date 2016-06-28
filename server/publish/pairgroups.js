import {PairGroups} from '../../both/collections';

Meteor.publish('pairgroups', function() {
  return PairGroups.find({});
});

Meteor.publish('pairgroupsAdmin', function() {
  if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

  return PairGroups.find({});
});
