if (process.env.NODE_ENV !== 'production') require('react-hot-loader/patch');
import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import { AppContainer } from 'react-hot-loader';
import {Meteor} from 'meteor/meteor';

import controller from './controller';
import Layout from './components/layout';
import './lib/liscroll';

const app = (
  <Container controller={controller}>
    <Layout />
  </Container>
);

Meteor.startup(() => {
  ReactDOM.render(app, document.getElementById('react-root'));
});

if (module.hot) {
  module.hot.accept('./components/layout', () => {
    let hotlayout = require('./components/layout');
    let hotapp = <Container controller={controller}><hotlayout.default/></Container>;
    let hotContainer = <AppContainer>{hotapp}</AppContainer>;
    ReactDOM.render(hotContainer, document.getElementById('react-root'));
  });
}
