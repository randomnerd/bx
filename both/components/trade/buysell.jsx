BuySell = React.createClass({
  goDeal(){

  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  render() {
    return (
      <div className="ui segments">
        <div className="ui secondary segment">
          <h4>{this.props.direction=="buy"?"Buy":"Sell"} {this.props.currency}</h4>
        </div>
        <div className={"ui small segment" + (this.props.direction=="buy"?" green":" red")} >

          <Formsy.Form className="ui form" onValidSubmit={this.goDeal} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref="form">
            <div className="two fields">
              <Semantic.Input name="Amount" label="Amount" icon="money" placeholder="0.0000" ref="amount" required labeled labelName={this.props.currency} />
              <Semantic.Input name="Price" label="Price" icon="shop" placeholder="0.0000" ref="price" required labeled labelName="BTC" />
            </div>
          </Formsy.Form>
        </div>
        <div className={"ui small attached segment" + (this.props.direction=="buy"?" green":" red")} >
          Total: Feee:
        </div>
        <button className={"ui fluid bottom attached button"+ (this.props.direction=="buy"?" green":" red")}>Green</button>
      </div>
    );
  }
});
