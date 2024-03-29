import React from 'react';
import ReactDOM from 'react-dom';
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
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('set enabled')
    }else{
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('set disabled')
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('uncheck')
    }
    if (this.props.isChecked) {
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('check');
      $that.setValue(1);
    } else {
      $that.setValue(0);
    };
    $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox({
      onChecked: function() {
        $that.setValue(1);
      },
      onUnchecked: function() {
        $that.setValue(0);
      },
    });

  },
  componentWillReceiveProps(newProps) {
    var $that=this;
    //newProps.isChecked?$(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('check'):$(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('uncheck');
    if(newProps.className!=" disabled"){
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('set enabled')
    }else{
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('set disabled')
      $(ReactDOM.findDOMNode(this)).find('.ui.checkbox').checkbox('uncheck')
    }
  },
  render() {
    var {
      isChecked,
      mapping,
      validations,
      validationError,
      validationErrors,
      onSubmit,
      onValid,
      onValidSubmit,
      onInvalid,
      onInvalidSubmit,
      onChange,
      reset,
      preventExternalInvalidation,
      onSuccess,
      onError,
      ...nonFormsyProps
    } = this.props;
    let classes = [ 'field' ];
    if (this.showRequired())  classes.push('required');
    if (this.showError())     classes.push('error');
    if (this.props.showInline)     classes.push('inline');
    if (this.props.className) classes.push(this.props.className);


    let errorMessage = this.getErrorMessage();
    let input = <input {...nonFormsyProps} value={this.getValue()} />;

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
