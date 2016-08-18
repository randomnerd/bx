import MainLayout from './main';
import AdminLayout from './admin';
import MobileLayout from './mobile_layout';
import {connect} from 'cerebral-view-react';
import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';

const Layout = connect({
  layout: 'layout',
  mobile: 'mobile',
  mob: 'mob',
  pair_link: 'pair_link',
}, class Layout extends React.Component {

  componentDidMount() {
    this.props.signals.tools.windowWidth();
  }

  render() {
    if (this.props.loading) return <div className="loader"><img src="/gears.svg" /></div>;
    if (this.props.mobile) return <MobileLayout {...this.props} />;
    switch (this.props.layout) {
      case 'admin': return <AdminLayout {...this.props} />;
      default: return <MainLayout {...this.props} />;
    }
  }
});
export default LayoutContainer = createContainer((props) => {
  return {
    loading: !Meteor.subs.ready() || Meteor.loggingIn(),
    //currencies: Currencies.findOne(),
    //tradepairs: CurrTypes.find().fetch()
  };
}, Layout);
