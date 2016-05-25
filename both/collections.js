import {Mongo} from 'meteor/mongo';
export const Currencies = new Mongo.Collection('currencies');
export const TradePairs = new Mongo.Collection('tradepairs');
export const Wallets = new Mongo.Collection('wallets');
export const Transactions = new Mongo.Collection('transactions');
export const BalanceChanges = new Mongo.Collection('balance_changes');
export const Notifications = new Mongo.Collection('notifications');
export const Balances = new Mongo.Collection('balances');
export const wAddressBook = new Mongo.Collection('waddressbook');
export const Chat = new Mongo.Collection('chat');
export const Withdrawals = new Mongo.Collection('withdrawals');
export const Orders = new Mongo.Collection('orders');
export const Trades = new Mongo.Collection('trades');
export const OrderBookItems = new Mongo.Collection('orderbookitems');
export const CurrTypes = new Mongo.Collection('currtypes');
export const PairTypes = new Mongo.Collection('pairtypes');

export const BitIndexIndicator_BTTC = new Mongo.Collection('BitIndexIndicator_BTTC');
export const BitIndexIndicator_BTTN = new Mongo.Collection('BitIndexIndicator_BTTN');

export const BitIndexIndicator_BTPR = new Mongo.Collection('BitIndexIndicator_BTPR');
export const BitIndexIndicator_BTPRCR = new Mongo.Collection('BitIndexIndicator_BTPRCR');

export const BitIndexIndicator_BTUA = new Mongo.Collection('BitIndexIndicator_BTUA');
