import { check } from 'meteor/check';
import { Currencies, TradePairs, CurrTypes, PairTypes, PairGroups } from '../../both/collections';

Meteor.methods({
  currrency_add: function(cur) {
    check(cur, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    Currencies.insert(cur);
  },

  currrency_update: function(id, $set) {
    check(id, String);
    check($set, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    Currencies.update(id, { $set });
  },

  currrency_remove: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    Currencies.remove(id);
  },

  tradepair_add: function(pair) {
    check(pair, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    TradePairs.insert(pair);
  },

  currtype_add: function(cur) {
    check(cur, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    CurrTypes.insert(cur);
  },

  currtype_update: function(id, $set) {
    check(id, String);
    check($set, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    CurrTypes.update(id, { $set });
  },

  currtype_remove: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    CurrTypes.remove(id);
  },

  pairtype_add: function(cur) {
    check(cur, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairTypes.insert(cur);
  },

  pairtype_update: function(id, $set) {
    check(id, String);
    check($set, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairTypes.update(id, { $set });
  },

  pairtype_remove: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairTypes.remove(id);;
  },

  pairgroup_add: function(cur) {
    check(cur, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairGroups.insert(cur);
  },

  pairgroup_update: function(id, $set) {
    check(id, String);
    check($set, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairGroups.update(id, { $set });
  },

  pairgroup_remove: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    PairGroups.remove(id);
  },

  tradepair_add: function(pair) {
    check(pair, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    TradePairs.insert(pair);
  },

  tradepair_update: function(id, $set) {
    check(id, String);
    check($set, Object);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    TradePairs.update(id, { $set });
  },

  tradepair_remove: function(id) {
    check(id, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');

    TradePairs.remove(id);
  },

  '/admin/impersonate': function(userId) {
    check(userId, String);
    if (!Meteor.userId()) throw new Meteor.Error('Unauthorized');
    if (!Roles.userIsInRole(Meteor.userId(), 'admin')) throw new Meteor.Error('Unauthorized');
    this.setUserId(userId);
  }
});
