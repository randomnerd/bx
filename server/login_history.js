Accounts.onLogin(function(session) {
  let {user, connection}  = session;
  let loginHistory = user.profile && user.profile.loginHistory || [];
  let addr = connection.httpHeaders['x-forwarded-for'] || connection.clientAddress;
  let newRecord = {time: new Date, addr};
  if (_.isEqual(loginHistory[0], newRecord)) return;
  loginHistory.unshift(newRecord);
  Meteor.users.update({ _id: user._id }, { $set: { 'profile.loginHistory': loginHistory.slice(0, 10) } });
});
