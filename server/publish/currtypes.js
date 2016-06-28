import {CurrTypes} from '../../both/collections';

Meteor.publish('currtypes', function() {
  return CurrTypes.find({published: true});
});

Meteor.publish('currtypesAdmin', function() {
  if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

  return CurrTypes.find({});
});
