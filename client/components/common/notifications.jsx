import React from 'react';
import ReactDOM from 'react-dom';
import {Notifications} from '../../../both/collections';
import DropMessage from '../common/drop_message';
import {Component} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

const NotificationShow = Component({
    layout: ['layout'],
    notif: ['notif']
}, {
    mixins: [ReactMeteorData],
    getInitialState() {
        return {haveMessages: false, messages: [], countFromDB: 0, nowDate: new Date().valueOf()};
    },
    getMeteorData() {
        return {
            notifications_new: Notifications.find({
                ack: false
            }, {
                sort: {
                    createdAt: -1
                }
            }).fetch(),
            notifications_now: Notifications.find({
                ack: false,
                createdAt: {
                    $gt: new Date(this.state.nowDate)
                }
            }, {
                sort: {
                    createdAt: -1
                }
            }).fetch(),
            notifications: Notifications.find({}, {
                limit: 10
            }, {
                sort: {
                    createdAt: -1
                }
            }).fetch()
        };
    },

    componentWillReceiveProps(nextProps) {
        if (nextProps.notif.changeTime) {
            this.setState({nowDate: new Date().valueOf()});
        }
        if (nextProps.notif.newOne) {
            let mess = _.clone(this.state.messages);
            //payload.payload.message.needShow = true;
            mess.push(nextProps.notif.newOne);
            this.setState({messages: mess});
        }
        if (nextProps.notif.delOne) {
            this.setState({
                messages: _.reject(this.state.messages, (x) => {
                    if (x._id === nextProps.notif.delOne) {
                        if (x.createdAt) {
                            this.setState({
                                nowDate: new Date(x.createdAt).valueOf()
                            });
                        }
                        return true;
                    } else {
                        return false;
                    }
                })
            });
        }
    },

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).dropdown({on: 'hover', action: 'nothing'});

        //this.setState({messages: mess});
    },
    delAllMessages() {
        this.props.signals.notif.delAll();
    },
    renderDropMessages() {
        if (this.data.notifications_new.length) {
            return this.data.notifications_new.map((item) => {
                return (<DropMessage key={item._id} item={item} closable={true}/>);
            });
        } else {
            return this.data.notifications.map((item) => {
                return (<DropMessage key={item._id} item={item} closable={false}/>);
            });
        }
    },

    render() {
        return (
            <div className='ui dropdown right item notifications'>
                <i className='alarm icon'/>
                <i className='dropdown icon'/> {this.data.notifications_new.length
                    ? <div className='down floating ui red circular mini label'>
                            {this.data.notifications_new.length}
                        </div>
                    : ''
}
                <div className='menu'>
                    <div className='scrolling menu'>
                        {this.renderDropMessages()}
                    </div>
                    {this.data.notifications_new.length
                        ? <a className='item' onClick={this.delAllMessages}>
                                Mark all as read
                            </a>
                        : ''
}
                    <a className='item' href='/u/notifications'>
                        See all notifications
                    </a>
                </div>

            </div>
        );
    }
});
export default NotificationShow;
