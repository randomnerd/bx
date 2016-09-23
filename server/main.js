import '/both/models';
import './publish';
import './methods';
import './bitindex_init';
import './first_admin';
import './job_collection';
import './browser_policy';

import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  console.log(Accounts.emailTemplates.resetPassword);
  Accounts.onLogin(function(session) {
    if (Roles.getUsersInRole('admin').count() > 0) return;
    Roles.addUsersToRoles(session.user._id, ['admin']);
  });
});
