import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'cerebral-view-react';

const Sidebar = connect({
  tools: ['tools']
}, class Sidebar extends React.Component {
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
  }
  componentWillReceiveProps(newProps) {
    $(ReactDOM.findDOMNode(this)).sidebar(newProps.tools.chat ? 'show' : 'hide');
  }

  render() {
    return (
      <div className='ui right inverted sidebar'>

        {this.props.children}

      </div>
    );
  }
});
export default Sidebar;
