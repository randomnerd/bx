import React from 'react';
import {
    Meteor
} from 'meteor/meteor';
import TradePairsMenu from './trade/trade_pairs_menu';
import UserTopMenu from './user_top_menu';
import TopInfo from './top_info';
import Infopanel from './common/infopanel';

import {
    Component
} from 'cerebral-view-react';
const TopMenu = Component({
            user: ['user'],
            pair: ['pair'],
            pair_link: ['pair_link'],
            page: ['page']
        }, {
            mixins: [ReactMeteorData],
            getMeteorData() {
                return {
                    //user: Meteor.user()
                };
            },
            getInitialState() {
                return {
                    drag: false
                };
            },
            getMenuItems() {
                return [
                    //{ href: '/', label: 'Bit.Exchange', extraCls: '' },
                    //{ href: '/pair', label: 'Pairs', extraCls: '' }
                ];
            },
            renderLoginButtons() {
                return ( < div className = "right menu" >
                    < a className = "item"
                    onClick = {
                        this.showLoginModal
                    } > Log in < /a> < a className = "item"
                    onClick = {
                        this.showSignUpModal
                    } > Sign up < /a> < /div>
                );
            },
            renderMenuItems() {
                return this.getMenuItems().map((item) => {
                    return <a className = {
                        "item " + item.extraCls
                    }
                    key = {
                        item.label
                    }
                    href = {
                        item.href
                    } > {
                        item.label
                    } < /a>;
                });
            },
            getInitialState() {
                return {
                    drag: false
                };
            },
            showLoginModal() {
                this.props.signals.user.loginClicked();
            },
            showSignUpModal() {
                this.props.signals.user.signUpClicked();
            },
            chatToggle() {
                this.props.signals.tools.chat();
            },
            infoToggle() {
                this.props.signals.tools.infoPanel();
            },
            dragToggle() {
                this.props.signals.tools.dragToggle();
                this.setState({
                    drag: !this.state.drag
                });
            },
            render() {
                return ( < div className = "ui top fixed large menu" >
                    < div className = "ui fluid container" >
                    < a className = "item "
                    href = "/" > < i className = "circle large red icon" > < /i>Bit.Exchange</a > {
                        this.renderMenuItems()
                    } < TradePairsMenu pair = {
                        this.props.pair.pair
                    }
                    /> < a className = "icon item double"
                    onClick = {
                        this.infoToggle
                    } >
                    < p > < i className = "dropdown large icon" > < /i></p >
                    < /a> {
                        this.props.pair.pair ? < TopInfo pair = {
                            this.props.pair.pair
                        }
                        /> : null}

                        {
                            !!this.props.user._id ?
                                < div className = "right menu" > {
                                    this.props.pair_link && this.props.page == 'pair' ? < a className = {
                                        "icon item" + (this.state.drag ? " active" : "")
                                    }
                                    onClick = {
                                        this.dragToggle
                                    }
                                    title = "View control" >
                                    < i className = "block layout icon" > < /i> < /a> : null} < UserTopMenu / >
                                    < a className = "icon item"
                                    onClick = {
                                        this.chatToggle
                                    } >
                                    < i className = "comment icon" > < /i> < /a> < /div> : this.renderLoginButtons()
                                }


                            < /div> < /div>
                        );
                    }
                });
            export default TopMenu;
