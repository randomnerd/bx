if (typeof Semantic === 'undefined') Semantic = {};

Semantic.Checkbox = React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      type: 'checkbox',
      mode: 'toggle'
    }
  },

  componentDidMount() {
    var $that=this;
    this.props.isChecked?$(this.getDOMNode()).find('.ui.checkbox').checkbox('check'):false;
    $(this.getDOMNode()).find('.ui.checkbox').checkbox({
      onChecked: function() {
        $that.setValue(1);
      },
      onUnchecked: function() {
        $that.setValue(undefined);
      },
    });
  },
  render() {
    classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    errorMessage = this.getErrorMessage();
    input = <input {...this.props} value={this.getValue()} />;

    return (
      <div className={classes.join(' ')}>

          <div className={"ui " + this.props.mode + " " + this.props.type}>
            {this.props.label ?
              <label>
                {this.props.label}
              </label>
            : ""}
            {input}
          </div>
      </div>
    );
  }
});
