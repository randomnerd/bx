import {Transactions} from '../collections';

Transactions._transform = (obj) => {
  return new Transaction(obj);
};

class Transaction {
  constructor(data) {
    this.className = 'Transaction';
    _.extend(this, data);
  }
  displayAmount() {
    return (this.amount / Math.pow(10, 8)).toFixed(8);
  }
  displayChanged() {
    return (this.changed / Math.pow(10, 8)).toFixed(8);
  }
}
