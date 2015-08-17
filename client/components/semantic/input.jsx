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
    if (this.props.onChg) this.props.onChg(event);
    this.setValue(event.currentTarget.value);
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
      {this.props.label ? <label>{this.props.label}</label> : ""}
        { this.props.icon||this.props.labeled||this.props.actionButton ?
          <div className={"ui " + (this.props.icon? this.props.iconSide + ' icon ':'') + (this.props.labeled?' right labeled ':'') + (this.props.actionButton?' action ':'') +  'input'}>
            { this.props.icon ? <i className={"icon " + this.props.icon} /> : '' }
            {input}
            {this.props.labeled ?
              <div className="ui label">
                {this.props.labelName}
              </div>
            : ""}
            {this.props.actionButton ?
              <div className="ui positive button" onClick={this.props.buttonAction}>
                {this.props.buttonName}
              </div>
            : ""}
          </div>
          : {input} }
      </div>
    );
  }
});
