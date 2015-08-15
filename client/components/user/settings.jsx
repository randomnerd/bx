SettingsPage = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published:''
    };
  },
  getMeteorData() {
    return {
      user: Meteor.user()
    };
  },
  twoFactorAuth(){

  },
  saveName(){

  },
  render() {
    return (
      <div className="ui segments">
        <div className="ui secondary segment">
          <h4>Account settings</h4>
        </div>
        <div className="ui small blue segment">
          <Formsy.Form key={this.props.k} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='chat'>
            <Semantic.Input name="chat_name" icon="user" label="Chat name" validations="minLength:3" placeholder="Enter yor chat name" action={this.saveName()} buttonName="Save" required />
          </Formsy.Form>
          <Formsy.Form key={this.props.k+3} className="ui form" onValidSubmit={this.newPassword} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='auth'>
            <div className="two fields">
              <Semantic.Checkbox name="confirmation" label="Don't ask for order confirmation" isChecked={this.published} />
            </div>
            <Semantic.Input name="new_pass" label="New password" validations="minLength:3" placeholder="Enter new password" required />
            <Semantic.Input name="confirm_pass" label="Confirm new password" validations="minLength:3" placeholder="Enter new password" required />

            <div className="field">
              <a className="ui positive labeled right aligned icon button" onClick={this.twoFactorAuth}>
                <i className="checkmark icon" />
                Save currency
              </a>

            </div>
          </Formsy.Form>
        </div>
      </div>
    );
  }
});
