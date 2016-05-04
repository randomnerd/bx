import {Orders} from '../collections';

Orders._transform = (obj) => {
  return new Order(obj);
};

export default class Order {
  constructor(data) {
    _.extend(this, data);
  }

  displayAmount() {
    return (this.amount / Math.pow(10, 8)).toFixed(8);
  }

  displayRemain() {
    return (this.remain / Math.pow(10, 8)).toFixed(8);
  }
  displayPrice() {
    return ((this.price) / Math.pow(10, 8)).toFixed(8);
  }
  cancel() {
      Meteor.call('cancelOrder', this._id);
  }
}
