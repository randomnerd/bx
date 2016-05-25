import {PairTypes} from '../../both/collections';

Meteor.publish('pairtypes', function() {
  return PairTypes.find({published: true});
});

Meteor.publish('pairtypesAdmin', function() {
  return PairTypes.find({});
});
