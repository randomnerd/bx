if (typeof Semantic === 'undefined') Semantic = {};

Semantic.Input = React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      type: 'text',
      iconSide: 'left'
    }
  },
  changeValue(event) {
    this.setValue(event.currentTarget.value);
  },
  render() {
    classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.className) classes.push(this.props.className);

    errorMessage = this.getErrorMessage();
    input = <input {...this.props} onChange={this.changeValue} value={this.getValue()} />;

    return (
      <div className={classes.join(' ')}>
      {this.props.label ? <label>{this.props.label}</label> : ""}
        { this.props.icon ?
          <div className={"ui " + this.props.iconSide + ' icon ' + (this.props.labeled?'right labeled ':'') +  'input'}>
            <i className={"icon " + this.props.icon} />
            {input}
            {this.props.labeled ?
              <div className="ui label">
                {this.props.labelName}
              </div>
            : ""}
          </div>
          : {input} }
      </div>
    );
  }
});
