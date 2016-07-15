import '/both/models';
import './publish';
import './methods';
import './bitindex_init';
import './first_admin';
import './job_collection';

import { Meteor } from 'meteor/meteor';

BrowserPolicy.content.allowOriginForAll('https://chart.googleapis.com');
BrowserPolicy.content.allowOriginForAll('https://fonts.googleapis.com');
BrowserPolicy.content.allowOriginForAll('https://fonts.gstatic.com');
BrowserPolicy.content.allowOriginForAll('http://localhost:3002');
BrowserPolicy.content.allowFontDataUrl();

Meteor.startup(() => {
  Accounts.onLogin(function(session) {
    if (Roles.getUsersInRole('admin').count() > 0) return;
    Roles.addUsersToRoles(session.user._id, ['admin']);
  });
});
