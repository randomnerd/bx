import React from 'react';
import Formsy from 'formsy-react';

export default React.createClass({
  mixins: [Formsy.Mixin],
  getDefaultProps() {
    return {
      type: 'checkbox',
      mode: 'toggle'
    }
  },

  componentDidMount() {
    var $that=this;
    if(this.props.className!=" disabled"){
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('set enabled')
    }else{
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('set disabled')
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('uncheck')
    }
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
  componentWillReceiveProps(newProps) {
    var $that=this;
    //newProps.isChecked?$(this.getDOMNode()).find('.ui.checkbox').checkbox('check'):$(this.getDOMNode()).find('.ui.checkbox').checkbox('uncheck');
    if(newProps.className!=" disabled"){
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('set enabled')
    }else{
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('set disabled')
      $(this.getDOMNode()).find('.ui.checkbox').checkbox('uncheck')
    }
  },
  render() {
    let classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    let errorMessage = this.getErrorMessage();
    let input = <input {...this.props} value={this.getValue()} />;

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
