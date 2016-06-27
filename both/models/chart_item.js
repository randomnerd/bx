import {ChartItems} from '../collections'

ChartItems._transform = (obj) => {
  return new ChartItem (obj);
};

export default class ChartItem {
  constructor(data) {
    _.extend(this, data);
  }

  displayOHLC() {

    return {
      pairId: this.pairId,
      date: new Date(this.time),
      open: (this.open / Math.pow(10, 8)).toFixed(8),
      high: (this.high / Math.pow(10, 8)).toFixed(8),
      low: (this.low / Math.pow(10, 8)).toFixed(8),
      close: (this.close / Math.pow(10, 8)).toFixed(8),
      volume: (this.volume / Math.pow(10,8)).toFixed(8),

    }

  }

}
