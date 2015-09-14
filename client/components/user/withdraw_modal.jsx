WithdrawModal = React.createClass({
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
      balance: Balances.findOne({currId: this.props.current}),
      currency: Currencies.findOne({_id:this.props.current}),
      wallet: Wallets.findOne({_id:this.props.current})
    }
  },

  componentDidMount() {

  },
  getAmount(){
    return {
      left:{
        buttons:[{icon:'right arrow',action:()=>{ this.setState({amount:this.getBalance()}) } }],
        labels:[{name:this.getBalance()}]
      },
      right:{
        labels:[{name:("Your fee: 0.1 " + (this.data.currency?this.data.currency.shortName:'')),icon:'warning'}]
      },
      pointed:"Avalable for withdraw"
    }
  },
  getAddressbook(){
    Dispatcher.dispatch({actionType: 'SHOW_ADDRESSBOOK_MODAL'});
  },
  getAddress(){
    return {
      left:{

      },
      right:{
        buttons:[{name:"Addressbook",action:this.getAddressbook,icon:'user'}]
      }
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
    this.setState({amount:''})
    Dispatcher.dispatch({actionType: 'HIDE_WITHDRAW_MODAL'});
  },

  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Sign up" header={"Withdraw " + (this.data.currency?this.data.currency.name:'')}
        onDeny={this.hide} onPositive={this.hide} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >

        <Formsy.Form className="ui large form" onValidSubmit={this.signUp} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>

          <Semantic.Input name="amount" label="Amount"  placeholder="0.00000000" ref="amount"
          adds={this.getAmount()} value={this.state.amount?this.state.amount:(this.props.amount?this.props.amount:'')} required />

          <Semantic.Input name="address" label="Address" value={this.props.address?this.props.address:''} placeholder="Type address here or select from address book" ref="address" adds={this.getAddress()} required />
          <Semantic.Input name="tfa" label="TFA code" placeholder="Type your TFA code here" ref="tfa" required/>
          <input type="submit" className="hidden" />
        </Formsy.Form>
      </Semantic.Modal>
    );
  }
});
