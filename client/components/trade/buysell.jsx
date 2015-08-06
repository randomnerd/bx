BuySell = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {amount: 0, price:0};
  },
  goDeal(){

  },

  componentDidMount() {
    Dispatcher.register((payload) => {
      //console.log('new dispatcher event', payload);

      switch (payload.actionType) {
        case 'BUY_SELL_AUTOCOMPLETE':
        if(payload.data.direction!=this.props.direction){
          this.setState({amount: payload.data.amount});
          this.setState({price: payload.data.price})
        }
          break;

      }
    })
  },

  changeAmount(event) {
    this.setState({amount: event.currentTarget.value});

  },
  changePrice(event) {
    this.setState({price: event.currentTarget.value})
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  render() {
    return (
      <div className="ui segments">
        <div className={"ui small segment" + (this.props.direction=="buy"?" green":" red")} >

          <Formsy.Form className="ui form" onValidSubmit={this.goDeal} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref="form">

            <Semantic.Input className="nomargin" name="amount" label="Amount" icon="money" value={this.state.amount!=0?(parseFloat(this.state.amount)).toFixed(8):"0"} placeholder="0.0000" ref="amount" validations="isNumeric" labeled labelName={this.props.currency} onChg={this.changeAmount} />
            <Semantic.Input name="price" label="Price" icon="shop" value={this.state.price!=0?(parseFloat(this.state.price)).toFixed(8):"0"} placeholder="0.0000" ref="price" validations="isNumeric" labeled labelName="BTC" onChg={this.changePrice} />

          </Formsy.Form>
        </div>

          <div className="ui horizontal segments">
            <div className={"ui small segment" + (this.props.direction=="buy"?" green":" red")}>
              <p><strong>Total:</strong>
              {(parseFloat(this.state.amount*this.state.price)).toFixed(8)}</p>
            </div>
            <div className={"ui small segment" + (this.props.direction=="buy"?" green":" red")}>
              <strong>Fee:</strong>
              {(parseFloat(this.state.amount*this.state.price*0.002)).toFixed(8)}
            </div>
          </div>

        <button className={"ui fluid bottom attached button"+ (this.props.direction=="buy"?" green":" red")}>{this.props.direction=="buy"?"Buy":"Sell"} {this.props.currency}</button>
      </div>
    );
  }
});
