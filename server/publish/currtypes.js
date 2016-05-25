import {CurrTypes} from '../../both/collections';

Meteor.publish('currtypes', function() {
  return CurrTypes.find({published: true});
});

Meteor.publish('currtypesAdmin', function() {
  return CurrTypes.find({});
});
