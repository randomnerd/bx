PasswordPage = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  render() {
    return (
      <div className="ui segments">
        <div className="ui secondary segment">
          <h4>Change password</h4>
        </div>
        <div className="ui small blue segment">
          <Formsy.Form key={this.props.k} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='curr'>
            <Semantic.Input name="old_pass" type="password" label="Old password" validations="minLength:3" placeholder="Enter old password" required />
            <Semantic.Input name="new_pass" type="password" label="New password" validations="minLength:3" placeholder="Enter new password" required />
            <Semantic.Input name="confirm_pass" type="password" label="Confirm new password" validations="minLength:3" placeholder="Enter new password" required />

            <div className="field">
              <a className="ui positive labeled icon button" onClick={this.newPassword}>
                <i className="checkmark icon" />
                Save new password
              </a>

            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
});
