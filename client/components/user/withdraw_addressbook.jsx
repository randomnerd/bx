WithdrawAddressModal = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      amount:''
    };
  },
  getMeteorData() {
    return {
      addresses: wAddressBook.find().fetch()
    }
  },

  componentDidMount() {

  },
  getAdds(){
    return {
      left:{
        buttons:[{icon:'right arrow',action:()=>{ this.setState({amount:this.getBalance()}) } }],
        labels:[{name:this.getBalance()}]
      },
      right:{
        labels:[{name:("Your fee: 0.1 " + (this.data.currency?this.data.currency.shortName:'')),icon:'warning'}]
      },
      pointed:"Your amount"
    }
  },
  getBalance() {
    if (!this.data.balance) return;
    let amount = this.data.balance ? this.data.balance.amount / Math.pow(10, 8) : 0;
    //console.log(amount.toFixed(8))
    return amount.toFixed(8);
  },
  hide(e) {
    //if (e) e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_ADDRESSBOOK_MODAL'});
  },

  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Sign up" header="Addressbook"
        onDeny={this.hide} onPositive={this.hide} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className="ui large form" onValidSubmit={this.signUp} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>

          <Semantic.Input name="amount" label="Amount"  placeholder="0.00000000" ref="amount"
          adds={this.getAdds()} value={this.state.amount} required />

          <Semantic.Input name="address" label="Address"  placeholder="Type address here or select from address book" ref="address" required />
          <Semantic.Input name="tfa" label="TFA code" placeholder="Type your TFA code here" ref="tfa" required/>
          <input type="submit" className="hidden" />
        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});
