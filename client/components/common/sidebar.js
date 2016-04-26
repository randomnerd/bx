import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'cerebral-view-react';

const Sidebar = Component({
  tools: ['tools']
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
    $(ReactDOM.findDOMNode(this)).sidebar(this.props.tools.chat ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.tools.chat ? 'show' : 'hide');
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
