import {PairGroups} from '../../both/collections';

Meteor.publish('pairgroups', function() {
  return PairGroups.find({});
});

Meteor.publish('pairgroupsAdmin', function() {
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');

  return PairGroups.find({});
});
