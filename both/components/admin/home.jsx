AdminHome = React.createClass({
  render() {
    return (
      <AdminOnly redirect="/">
        admin home
      </AdminOnly>
    );
  }
});
