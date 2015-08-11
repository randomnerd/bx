TradePairAdmin = React.createClass({
  mixins: [ReactMeteorData],
  //currId: currencyId
  //marketCurrId: currencyId
  //published: boolean
  //buyFee: float
  //sellFee: float
  delCurr(event) {
    if (confirm("Remove currency?")) {
      Meteor.call('traidpair_remove',$(event.currentTarget).attr('data-del'),function(error, result){
				if(result){
					this.setState({errorMessage: err.message});
				}else{
					FlowRouter.go('/admin/currencies');
				}
			});
    }
  },
  getMeteorData() {
    return {
      TradePairs: TradePairs.find({}, {sort: {name: 1}}).fetch()
    }
  },
  renderPairsList() {
    return this.data.TradePairs.map((pair) => {
      return (
        <tr key={pair._id}>
          <td>{pair.currId}</td>
          <td>{pair.marketCurrId}</td>
          <td>{pair.buyFee}</td>
          <td>{pair.sellFee}</td>
          <td>{pair.published ? 'true' : 'false'}</td>
          <td className="right aligned collapsing">
            <div className="ui tiny icon buttons">
              <a className="ui positive button" href={"/admin/tradepairs/edit/" + pair._id}>
                <i className="write icon"></i>
              </a>
              <div className="ui negative button" onClick={pair.delCurr} data-del={pair._id}>
                <i className="remove icon"></i>
              </div>
            </div>
          </td>
        </tr>
      );
    })
  },
  render() {
    return (
      <div>
        <a className="ui blue labeled icon button" href="/admin/tradepairs/new">
          <i className="plus icon" />
          New trade pair
        </a>
        <table className="ui compact table">
          <thead>
            <tr>
              <th>Currency</th>
              <th>Market currency</th>
              <th>Buy fee</th>
              <th>Sell fee</th>
              <th>Published</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.renderPairsList()}
          </tbody>
        </table>
      </div>
    );
  }
});