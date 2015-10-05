import React from 'react';
import reactMixin from 'react-mixin';

@reactMixin.decorate(ReactMeteorData)
export default class MeteorComponent extends React.Component {
  getMeteorData() {
    return {};
  }
}
