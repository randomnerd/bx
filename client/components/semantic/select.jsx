if (typeof Semantic === 'undefined') Semantic = {};

Semantic.Select = React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      type: 'text',
      iconSide: 'left',
    }
  },
  changeValue(event) {
    if (this.props.onChg) this.props.onChg(event);
    this.setValue(event.currentTarget.value);
  },

  componentDidMount() {
    var $that=this;
    //alert($(this.getDOMNode()).find('.ui.search').html());
    $(this.getDOMNode()).find('.ui.search').search({
      source: this.props.content
    });
  },

  render() {

    classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    errorMessage = this.getErrorMessage();
    input = <input {...this.props} onChange={this.changeValue} value={this.getValue()} />;

    return (
      <div className={classes.join(' ')}>
        <div className="ui search">
          {this.props.label ? <label>{this.props.label}</label> : ""}
          { this.props.icon ?
            <div className={"ui " + this.props.iconSide + ' icon ' + (this.props.labeled?'right labeled ':'') +  'input'}>
              {input}
              <i className={"icon " + this.props.icon} />
            </div>
          : {input} }
          <div className="results" > </div>
        </div>
      </div>
    );
  }
});
