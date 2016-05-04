import {
    Trades
} from '../collections';

Trades._transform = (obj) => {
    return new Trade(obj);
};

export default class Trade {
    constructor(data) {
        _.extend(this, data);
    }

    displayAmount() {
        return (this.amount / Math.pow(10, 8)).toFixed(8);
    }
    displayPrice() {
        return ((this.price) / Math.pow(10, 8)).toFixed(8);
    }
}
