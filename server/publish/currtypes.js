import {CurrTypes} from '../../both/collections';

Meteor.publish('currtypes', function() {
  return CurrTypes.find({published: true});
});

Meteor.publish('currtypesAdmin', function() {
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');

  return CurrTypes.find({});
});
