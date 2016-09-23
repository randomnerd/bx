import React from 'react';
import ReactDOM from 'react-dom';
import Formsy from 'formsy-react';
import {connect} from 'cerebral-view-react';

const Modal = connect({
}, class Modal extends React.Component {
  static defaultProps = {
      size: '',
      positiveLabel: 'OK',
      denyLabel: 'Cancel',
      allowSubmit: true
  }
  componentDidMount() {
    $(ReactDOM.findDOMNode(this)).modal({
      context: $('.body'),
      detachable: false,
      autofocus:  true,
      closable:   false,
      onShow:     this.props.onVisible,
      onVisible:  this.props.onVisible,
    //  onHidden:   this.props.onDeny
    });
    $(ReactDOM.findDOMNode(this)).modal(this.props.show ? 'show' : 'hide');
  }
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).modal(newProps.show ? 'show' : 'hide');
  }

  renderActions(button){
    return (
      <div className="ui main button" onClick={button.action}>
        { button.name }
      </div>
    );
  }

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
          {this.props.buttons ? this.renderActions(this.props.buttons) : ""}
          <div className="ui main button" onClick={this.props.onDeny.bind(this)}>
            { this.props.denyLabel }
          </div>

          <button className="ui green right labeled icon button"
            onClick={this.props.onPositive.bind(this)} disabled={!this.props.allowSubmit}>
            { this.props.positiveLabel }
            <i className="checkmark icon"></i>
          </button>
        </div>
      </div>
    );
  }
});
export default Modal;
