import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'cerebral-view-react';

const Sidebar = Component({
}, {
  componentDidMount() {
    //$this=this;
    $(ReactDOM.findDOMNode(this)).sidebar({
      context: $('.body'),
      dimPage: false,
      closable: false,
      //scrollLock: true,
      transition: 'slide along',
      onHidden: ()=> {
        $('.body').css('overflow-y', 'auto');
      }
    });
    $(ReactDOM.findDOMNode(this)).sidebar(this.props.show ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.show ? 'show' : 'hide');
  },

  delAllMessages() {
    //Dispatcher.dispatch({ actionType: 'SHOW_SIDEBAR', payload: { addr: this.props.item } })
  },

  render() {
    return (
      <div className='ui right inverted sidebar'>

        {this.props.children}

      </div>
    );
  }
});
export default Sidebar;
