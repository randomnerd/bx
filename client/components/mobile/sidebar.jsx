import React from 'react';
import ReactDOM from 'react-dom';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState() {
    return {

    };
  },

  getMeteorData() {
    return {

    };
  },
  componentDidMount() {
    //$this=this;
    $(ReactDOM.findDOMNode(this)).sidebar({
      context: $('.body'),
      dimPage: true,
      closable: true,
      //scrollLock: true,
      transition: 'overlay',
      onHidden: ()=> {
        //Dispatcher.dispatch({actionType: 'HIDE_MOBILE_MENU'});
        //return false;
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
      <div className='ui left simple inverted sidebar vertical menu mobile'>

        {this.props.children}

      </div>
    );
  }
});
