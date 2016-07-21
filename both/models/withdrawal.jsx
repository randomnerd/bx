import {Withdrawals} from '../collections';

Withdrawals._transform = (obj) => {
  return new Withdrawal(obj);
};

class Withdrawal {
  constructor(data) {
    this.className = 'Withdrawal';
    _.extend(this, data);
  }
  displayAmount() {
    return (this.amount / Math.pow(10, 8)).toFixed(8);
  }
  displayChanged() {
    return (this.changed / Math.pow(10, 8)).toFixed(8);
  }
  displayFee() {
    return (this.fee / Math.pow(10, 8)).toFixed(8);
  }
}
