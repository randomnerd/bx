import {
  Currencies, TradePairs
}
from '../../both/collections';

Meteor.methods({

  currrency_add: function(cur) {
    Currencies.insert(cur, function(err, id) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },
  currrency_update: function(id, cur) {
    Currencies.update(id, {
      $set: cur
    }, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },


  currrency_remove: function(id) {
    Currencies.remove(id, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },


  tradepair_add: function(pair) {
    TradePairs.insert(pair, function(err, id) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },
  tradepair_update: function(id, pair) {
    TradePairs.update(id, {
      $set: pair
    }, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },


  tradepair_remove: function(id) {
    TradePairs.remove(id, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },

});
