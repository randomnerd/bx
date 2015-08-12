if (typeof Semantic === 'undefined') Semantic = {};

Semantic.Select = React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      icon: 'search',
      type: 'text',
      iconSide: 'left'
    }
  },

  componentDidMount() {
    $(this.refs.select.getDOMNode()).dropdown();
  },

  renderOptions(){
    return this.props.content.map((item) => {
      return  (
        <option key={item._id} value={item._id}>{item.title}</option>
      );
    });
  },

  render() {
    classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    errorMessage = this.getErrorMessage();


    return (
      <div className={classes.join(' ')}>
        {this.props.label ? <label>{this.props.label}</label> : ""}
        <select className="ui search dropdown" ref="select">
          {this.renderOptions()}
        </select>
      </div>
    );
  }
});
