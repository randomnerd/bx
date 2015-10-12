import {BitIndexIndicator_BTPR, BitIndexIndicator_BTTC, BitIndexIndicator_BTTN, BitIndexIndicator_BTUA} from 'collections';

Meteor.publish('BitIndexIndicator_BTPR', function () {
  // TODO: authorize worker
  return BitIndexIndicator_BTPR.find({}, {sort: {date: 1}});
});

Meteor.publish('BitIndexIndicator_BTTC', function () {
  // TODO: authorize worker

  return BitIndexIndicator_BTTC.find({});
});

Meteor.publish('BitIndexIndicator_BTTN', function () {
  // TODO: authorize worker

  return BitIndexIndicator_BTTN.find({});
});

Meteor.publish('BitIndexIndicator_BTUA', function () {
  // TODO: authorize worker

  return BitIndexIndicator_BTUA.find({});
});
