CurrencyForm = React.createClass({
  render() {
    return (
      <div>
        <Formsy.Form className="ui form">
          <Semantic.Input name="name" label="Full name" />
          <Semantic.Input name="shortName" label="Short name"/>
        </Formsy.Form>
      </div>
    );
  }
});
