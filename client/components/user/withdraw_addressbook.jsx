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


  hide(e) {
    //if (e) e.preventDefault();
    this.setState({errorMessage: null});
    Dispatcher.dispatch({actionType: 'HIDE_ADDRESSBOOK_MODAL'});
  },
  saveAddress() {
    //console.log(this.refs.curr.getCurrentValues())
    var addrVals = this.refs.form.getCurrentValues();
    Meteor.call('address/add',addrVals,function(err, result){
      if(result){
        //console.log(err.message,result)
        //this.setState({errorMessage: err.message});
      }else{
        //console.log(err.message)
        //FlowRouter.go('/admin/currencies');
      }
    });
  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },
  renderAddressItems() {
    return this.data.addresses.map((item) => {

      return  (
        <WithdrawAddress key={item._id} item={item} />
      );

    });
  },
  render() {
    return (
      <Semantic.Modal size="small" positiveLabel="Save" header="Addressbook"
        onDeny={this.hide} onPositive={this.saveAddress} show={this.props.show}
        errorMsg={this.state.errorMessage} allowSubmit={this.state.allowSubmit} >
        <div className="ui small blue segment">
          <table className="ui selectable very compact very basic striped table nomargin">
            <thead>
              <tr className="lesspadding">
                <th className="four wide" >Name</th>
                <th className="eight wide" >Address</th>
                <th className="four wide">Actions</th>
              </tr>
            </thead>
          </table>
          <div className="scrollable10rows">
            <table className="ui selectable very compact very basic sortable table">
              <tbody>
                { this.renderAddressItems() }
              </tbody>
            </table>
          </div>
        </div>
        <h3 className="ui header">New address</h3>
        <Formsy.Form className="ui large form" onValidSubmit={this.saveAddress} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='form'>
          <div className="two fields">
            <Semantic.Input name="name" label="Name" placeholder="Type your contact name here" ref="name" required/>
            <Semantic.Input name="address" label="Address"  placeholder="Type address here" ref="address" required />
          </div>
          <input type="submit" className="hidden" />
        </Formsy.Form>

      </Semantic.Modal>
    );
  }
});
