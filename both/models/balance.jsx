Meteor.startup(() => {
  Balances._transform = (obj) => {
    return new Balance(obj);
  };

  class Balance {
    constructor(data) {
      _.extend(this, data);
    }

    displayAmount() {
      return (this.amount / Math.pow(10, 8)).toFixed(8);
    }

    displayHeld() {
      return (this.held / Math.pow(10, 8)).toFixed(8);
    }
    displayTotal() {
      return ((this.amount + this.held) / Math.pow(10, 8)).toFixed(8);
    }
  }
});
