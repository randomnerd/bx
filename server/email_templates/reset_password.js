Meteor.startup(() => {
  Accounts.emailTemplates.resetPassword.from = "DAOstock.com <no-reply@daostock.com>"
  let oldText = Accounts.emailTemplates.resetPassword.text;
  Accounts.emailTemplates.resetPassword.text = (user) => {
    let {token} = user.services.password.reset;
    let url = __meteor_runtime_config__.ROOT_URL + `u/reset_password/${token}`;
    return oldText(user, url);
  }
});
