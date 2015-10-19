import {Orders} from 'collections';

Meteor.publish('orderQueue', function() {
  // TODO: authorize worker
  return Orders.find({complete: false, canceled: false});
});
