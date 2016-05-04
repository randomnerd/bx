import {
    OrderBookItems
} from '../collections';

OrderBookItems._transform = (obj) => {
    return new OrderBookItem(obj);
};

export default class OrderBookItem {
    constructor(data) {
        _.extend(this, data);
    }

    displayAmount() {
        return (this.amount / Math.pow(10, 8)).toFixed(8);
    }
    displayMarketAmount() {
        return (this.marketAmount / Math.pow(10, 8)).toFixed(8);
    }
    displayPrice() {
        return ((this.price) / Math.pow(10, 8)).toFixed(8);
    }
}
