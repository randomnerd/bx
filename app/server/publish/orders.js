import {Orders} from 'collections';

Meteor.publish('orderQueue', function() {
  // TODO: authorize worker
  return Orders.find({complete: {$ne: true}, canceled: {$ne: true}});
});
