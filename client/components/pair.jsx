PairBar = React.createClass({
  getPairItems() {
    return [
      { pair: 'BTC', value: '0.005467', href: 'btc'},
      { pair: 'LTC', value: '0.006685', href: 'ltc'},
      { pair: 'GLD', value: '0.00093737', href: 'gld'},
      { pair: 'FTC', value: '0.09123', href: 'ftc'},
    ];
  },
  renderPairItems() {
    return this.getPairItems().map((item) => {
      return  (
        <a className={"item" + (this.props.active==item.href?" active":"")} key={item.href} href={"/pair/"+item.href}>
          <div className="ui two column grid">
            <div className="column">
              {item.pair}
            </div>
            <div className="right aligned column">
              {item.value}
            </div>
          </div>
        </a>
      );
    });
  },
  render() {
    return (
      <div>{ this.renderPairItems() }</div>
    );
  }
});
