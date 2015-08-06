CurrencyForm = React.createClass({
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false
    };
  },
  newCurr(event) {
    var {name, shortName,published} = this.refs.curr.getCurrentValues();
    console.log(this.refs.curr.getCurrentValues())
  },
  saveCurr(event) {
    this.setState({amount: event.currentTarget.value});
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  render() {
    return (
      <div>
        <Formsy.Form className="ui form" onValidSubmit={this.signUp} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='curr'>
          <Semantic.Input name="name" label="Full name" validations="minLength:3" placeholder="Enter name of currency" required />
          <Semantic.Input name="shortName" label="Short name" validations="minLength:3" placeholder="Enter short name of currency" required />
          <div className="two fields">
            <Semantic.Checkbox name="published" label="Published" />
            <div className="field">
              <a className="ui blue labeled right aligned icon button" onClick={this.newCurr}>
                <i className="plus icon" />
                Save currency
              </a>
            </div>
          </div>
        </Formsy.Form>
      </div>
    );
  }
});
