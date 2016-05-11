import React from 'react';
import ReactDOM from 'react-dom';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';
import Semantic from '../semantic';


const Sidebar = Component({
  mob: ['mob'],
  page: ['page'],
  pair_link: ['pair_link'],
  user: ['user']
}, {
  getInitialState() {
    return {
      sidebar: false
    };
  },

  componentDidMount() {
    //$this=this;
    $(ReactDOM.findDOMNode(this)).sidebar({
      context: $('.body'),
      dimPage: true,
      closable: true,
      scrollLock: true,
      transition: 'overlay',
      onHidden: ()=> {
        this.props.signals.mob.menu({action:'close'});
      }
    });
    $(ReactDOM.findDOMNode(this)).sidebar(this.props.mob.menu ? 'show' : 'hide');
  },
  componentWillReceiveProps(newProps) {
    //if(this.state.sidebar!=newProps.mob.menu){
      this.setState({sidebar: newProps.mob.menu})
      $(ReactDOM.findDOMNode(this)).sidebar(newProps.mob.menu ? 'show' : 'hide');
    //}
  },

  render() {
    return (
      <div className='ui left simple inverted sidebar vertical menu mobile'>

        {this.props.children}

      </div>
    );
  }
});
export default Sidebar;
