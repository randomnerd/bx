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
      //profile: 1
    },
    limit: perPage,
    skip: perPage*(page-1)
  });
});
