import React from 'react';
import Formsy from 'formsy-react';

export default React.createClass({
  getDefaultProps() {
    return {
      size: '',
      positiveLabel: 'OK',
      denyLabel: 'Cancel',
      allowSubmit: true,
    };
  },
  componentDidMount() {
    $(this.getDOMNode()).modal({
      context: $('.body'),
      detachable: false,
      autofocus:  true,
      closable:   false,
      onShow:     this.props.onVisible,
      onVisible:  this.props.onVisible,
    //  onHidden:   this.props.onDeny
    });
    $(this.getDOMNode()).modal(this.props.show ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(this.getDOMNode()).modal(newProps.show ? 'show' : 'hide');
  },
  render() {
    return (
      <div className={ this.props.size + " " + this.props.hide + " ui modal" }>
        { this.props.header ?
          <div className="header">
            {this.props.header}
          </div> : ''
        }

        <div className="content">
          { this.props.errorMsg ?
            <div className="ui negative message">
              {this.props.errorMsg}
            </div> : ''
          }

          {this.props.children}
        </div>

        <div className="actions">
          <div className="ui black button" onClick={this.props.onDeny}>
            { this.props.denyLabel }
          </div>

          <button className="ui green right labeled icon button"
            onClick={this.props.onPositive} disabled={!this.props.allowSubmit}>
            { this.props.positiveLabel }
            <i className="checkmark icon"></i>
          </button>
        </div>
      </div>
    );
  }
});