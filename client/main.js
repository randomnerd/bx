import React from 'react';
import ReactDOM from 'react-dom';
import {Container} from 'cerebral-view-react';
import {Meteor} from 'meteor/meteor';

import controller from './controller';
import Layout from './components/layout';

const app = (
  <Container controller={controller}>
    <Layout />
  </Container>
);

Meteor.startup(() => {
  ReactDOM.render(app, document.getElementById('react-root'));
});
