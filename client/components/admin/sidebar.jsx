AdminSidebar = React.createClass({
  render() {
    return (
      <div className="ui fluid vertical menu">
        <a href="/admin/currencies" className="item">Currencies</a>
        <a href="/admin/tradepairs" className="item">Trade pairs</a>
      </div>
    );
  }
});
