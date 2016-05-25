import {
  Currencies, TradePairs, CurrTypes, PairTypes
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

  currtype_add: function(cur) {
    CurrTypes.insert(cur, function(err, id) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },
  currtype_update: function(id, cur) {
    CurrTypes.update(id, {
      $set: cur
    }, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },


  currtype_remove: function(id) {
    CurrTypes.remove(id, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },

  pairtype_add: function(cur) {
    PairTypes.insert(cur, function(err, id) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },
  pairtype_update: function(id, cur) {
    PairTypes.update(id, {
      $set: cur
    }, function(err) {
      if (!err) {
        return false;
      } else {
        return err;
      }
    });
  },


  pairtype_remove: function(id) {
    PairTypes.remove(id, function(err) {
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
