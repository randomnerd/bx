Meteor.startup(() => {
  Transactions._transform = (obj) => {
    return new Transaction(obj);
  };

  class Transaction {
    constructor(data) {
      _.extend(this, data);
    }
    displayAmount() {
      return (this.amount / Math.pow(10, 8)).toFixed(8);
    }
  }
});
