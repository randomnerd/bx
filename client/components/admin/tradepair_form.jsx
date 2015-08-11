TradePairForm = React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {
      errorMessage: null,
      allowSubmit: false,
      published:'',
    };
  },

  newCurr(event) {
    var {name, shortName,published} = this.refs.curr.getCurrentValues();

    Meteor.call('traidpair_add',{name: name, shortName: shortName, published:published},function(error, result){
      if(result){
        this.setState({errorMessage: err.message});
      }else{
        FlowRouter.go('/admin/currencies');
      }
    });

  },
  saveCurr(event) {
    //console.log(this.refs.curr.getCurrentValues())
    var currVals = this.refs.curr.getCurrentValues();
    Meteor.call('traidpair_update',this.data.TradePairs._id,currVals,function(error, result){
      if(result){
        this.setState({errorMessage: err.message});
      }else{
        FlowRouter.go('/admin/currencies');
      }
    });
  },
  getMeteorData() {
    return {
      tradePairs: TradePairs.findOne({shortName:this.props.current}),
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch()
    }
  },
  currentVal(what) {

    return this.data.TradePairs?this.data.tradePairs[what]:''

  },
  allowSubmit() { this.setState({allowSubmit: true}) },
  disallowSubmit() { this.setState({allowSubmit: false}) },

  currsForSearch() {
    console.log(this.data.currencies);
    var currs = [];
    _.each(this.data.currencies,((curr) => {
      currs.push({title:curr.shortName, description:curr.name})
    }));
    return currs;
  },

  render() {
    this.published=this.currentVal('published')?"checked":false


    //currId: currencyId
    //marketCurrId: currencyId
    //published: boolean
    //buyFee: float
    //sellFee: float
    return (
      <div>
        <Formsy.Form key={this.props.k} className="ui form" onValidSubmit={this.newCurr} onValid={this.allowSubmit} onInvalid={this.disallowSubmit} ref='curr'>
          <Semantic.Select name="currId" icon="search" label="Currency" validations="minLength:3" placeholder="Select currency" required value={this.currentVal('name')} content={this.currsForSearch()} />
          <Semantic.Select name="marketCurrId" label="Market currency" validations="minLength:3" placeholder="Select currency" required value={this.currentVal('name')} content={this.currsForSearch()} />
          <Semantic.Input name="buyFee" label="Buy fee" validations="isNumeric" placeholder="Enter name of currency" required value={this.currentVal('name')} />
          <Semantic.Input name="sellFee" label="Sell fee" validations="isNumeric" placeholder="Enter name of currency" required value={this.currentVal('name')} />
          <div className="two fields">
            <Semantic.Checkbox name="published" label="Published" isChecked={this.published} />
            <div className="field">
              <a className="ui blue labeled right aligned icon button" onClick={this.props.current?this.saveCurr:this.newCurr}>
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
