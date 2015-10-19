import {Orders} from 'collections';
import {Jobs} from 'server/job_collection';

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
    if (Meteor.isServer) {
      var job = new Job(Jobs, 'cancelOrder', {id: this._id});
      job.save();
    } else {
      Meteor.call('cancelOrder', this._id);
    }
  }
}
