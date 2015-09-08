WithdrawModal = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  },
  getMeteorData() {
    return {
      balance: Balances.findOne({currId: this.props.current}),
      currency: Currencies.findOne({_id:this.props.current}),
      wallet: Wallets.findOne({_id:this.props.current})
    }
  },
  adds:{
    amount:{
      right:{
        buttons:[{name:'nnnn'},{name:'xxxx'}]
      }
    }
  },
  hide(e) {
    if (e) e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_SIGN_UP_MODAL'});
  },
  signUp() {
    var {email, password} = this.refs.form.getCurrentValues();

    Accounts.createUser({email: email, password: password}, (err) => {
      if (err) {
        this.setState({errorMessage: err.message});
      } else {
        this.hide();
      }
    });
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Sign up" header={"Withdraw " + (this.data.currency?this.data.currency.name:'')}
        onDeny={this.hide} onPositive={this.signUp} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className="ui large form" onValidSubmit={this.signUp} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>

          <Semantic.Input className="left action" name="amount" label="Amount"  placeholder="0.00000000" ref="amount"
          pointed={"Your fee: 0.1" + (this.data.currency?this.data.currency.shortName:'')}
          iconButtonName="0.05306243" iconButtonIcon="right arrow" adds={this.adds.amount}
          required />

          <Semantic.Input name="address" label="Address"  placeholder="Type address here or select from address book" ref="address" required />
          <Semantic.Input name="tfa" label="TFA code" placeholder="Type your TFA code here" ref="tfa" required/>
          <input type="submit" className="hidden" />
        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});
