import {PairTypes} from '../../both/collections';

Meteor.publish('pairtypes', function() {
  return PairTypes.find({published: true});
});

Meteor.publish('pairtypesAdmin', function() {
  if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');
  return PairTypes.find({});
});
