import {PairGroups} from '../../both/collections';

Meteor.publish('pairgroups', function() {
  return PairGroups.find({});
});

Meteor.publish('pairgroupsAdmin', function() {
  return PairGroups.find({});
});
