CurrenciesAdmin = React.createClass({
  mixins: [ReactMeteorData],
  getMeteorData() {
    return {
      currencies: Currencies.find({}, {sort: {name: 1}}).fetch()
    }
  },
  renderCurrenciesList() {
    return this.data.currencies.map((curr) => {
      return (
        <tr key={curr._id}>
          <td>{curr.name}</td>
          <td>{curr.shortName}</td>
          <td>{curr.status}</td>
          <td>{curr.published ? 'true' : 'false'}</td>
        </tr>
      );
    })
  },
  render() {
    return (
      <div>
        <a className="ui blue labeled icon button" href="/admin/currencies/new">
          <i className="plus icon" />
          New currency
        </a>
        <table className="ui compact table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Short name</th>
              <th>Status</th>
              <th>Public</th>
            </tr>
          </thead>
          <tbody>
            {this.renderCurrenciesList()}
          </tbody>
        </table>
      </div>
    );
  }
});
