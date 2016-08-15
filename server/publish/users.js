import { check } from 'meteor/check';

Meteor.publish('usersAdmin', function(page) {
  check(page, Match.Maybe(Number));
  let perPage = 20;
  if (!page || page < 1) page = 1;
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');
  return Meteor.users.find({}, {
    fields: {
      username: 1,
      emails: 1,
      createdAt: 1,
      'profile.loginHistory': 1,
      'profile.online': 1
    },
    limit: perPage,
    skip: perPage*(page-1)
  });
});

Meteor.publish('userAdmin', function(id) {
  check(id, Match.Maybe(String));
  if (!id)  throw new Meteor.Error('No id');
  if (!this.userId) throw new Meteor.Error('Unauthorized');
  if (!Roles.userIsInRole(this.userId, 'admin')) throw new Meteor.Error('Unauthorized');
  return Meteor.users.find({_id: id}, {
    fields: {
      username: 1,
      emails: 1,
      createdAt: 1,
      'profile.loginHistory': 1,
      'profile.online': 1
    },
    limit: 1
  });
});
