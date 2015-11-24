import React from 'react';
import { BitIndexIndicator_BTPR, TradePairs } from 'collections';
import BuySell from 'components/trade/buysell';
import Trades from 'components/trade/lastTrades';
import Charts from 'components/bitindex';
import Orders from 'components/trade/orderbook';
import OpenOrders from 'components/trade/open_orders';
import Balance from 'components/trade/balance';

export default React.createClass({
  mixins: [ReactMeteorData],
  getInitialState: function() {
    return {
      chartType: 'candle',

      drag_on: false,

      leftofcharts: false,
      underdouble: false,
      undertrades: false,
      underorders: false,
      abovedouble: false,
      abovetrades: false,
      aboveorders: false,

      left: 'balance',
      right: 'double',
      center: 'lbalance rdouble',

      lcol: 1,
      rcol: 2,
      ccol: 0,

      places: {
        right:{
          balance: false,
          orders: 1,
          trades: 2
        },
        left:{
          balance: 1,
          orders: false,
          trades: false
        },
        center:{}
      },
      fixclass:false,
      dragorders:false,
    };
  },

  positions: {
    orders: {
      column: 'right',
      place: 1,
      size: "big"
    },
    trades: {
      column: 'right',
      place: 2,
      size: "big"
    },
    balance: {
      column: 'left',
      place: 1,
      size: "big"
    },
    openorders: {
      column: 'center',
      place: 2,
      size: "small"
    },
    charts: {
      column: 'center',
      place: 1,
      size: "small"
    },
  },

  previousPlace:{
    orders: false,
    trades: false,
    openorders: false,
    balance: false
  },

  // getPlacesLeft(){
  //   return [
  //     this.state.places.left
  //   ]
  // },

  getMeteorData() {
    let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
    let pair = TradePairs.findOne({permalink: this.props.active});

    return {
      pair: pair,
      BTPR_Loading: !handle_BTPR.ready(),
      BTPR: BitIndexIndicator_BTPR.find().fetch(),
      pairId: pair && pair._id

    };
  },
  showCandle(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'candle'});
  },
  showLine() {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'line'});
  },
  showMACD(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'macd'});
  },
  showRSI(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'rsi'});
  },
  showSTO(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'sto'});
  },
  showBollinger(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'bollinger'});
  },
  showKagi(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'kagi'});
  },
  showPointandFigure(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'pointandfigure'});
  },
  showHaikinAshi(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'haikinashi'});
  },
  showRenko(event) {
    $(this.refs.chartType).find('.item').removeClass('active');
    $(event.currentTarget).addClass('active');
    this.setState({chartType: 'renko'});
  },
  renderBlockChainIndicator() {
    switch (this.state.chartType) {


    case 'candle':
      return (
          <div><Charts.CandleStickStockScaleChartWithVolumeHistogramV3
          data = {this.data.BTPR.slice(200)} type = 'hybrid' height={350} /></div>
        );
      break;

    case 'line':
      return (
          <div><Charts.linechart data = {this.data.BTPR.slice(200)} type = 'hybrid' height={350} /></div>
        );
      break;


    case 'macd':
      return (
          <div><Charts.CandleStickChartWithMACDIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={350} /></div>
        );
      break;
    case 'rsi':
      return (
          <div><Charts.CandleStickChartWithRSIIndicator
          data = {this.data.BTPR.slice(200)} type = 'svg' height={350} /></div>
        );
      break;

    case 'sto':
      return (
          <div><Charts.CandleStickChartWithFullStochasticsIndicator
          data = {this.data.BTPR} type = 'svg' height={350} /></div>
        );
      break;

    case 'bollinger':
      return (
          <div>
            <Charts.CandleStickChartWithBollingerBandOverlay
            data = {this.data.BTPR} type = 'svg' height={350} />
          </div>
        );
      break;

    case 'kagi':
      return (
            <div><Charts.Kagi data = {this.data.BTPR}
             type = 'svg' height={350}/></div>
        );
      break;

    case 'pointandfigure':
      return (
            <div><Charts.PointAndFigureWithUpdatingData
            data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    case 'haikinashi':
      return (
        <div><Charts.HaikinAshi
        data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    case 'renko':

      return (
        <div><Charts.RenkoWithUpdatingData
        data = {this.data.BTPR} type = 'svg' height={350}/></div>
      );
      break;

    default:
      break;
    }
  },

  wides(){
    let left = '';
    let right = '';
    let center = '';

    let lcol = 0;
    let rcol = 0;
    let ccol = 0;

    let pos = this.positions;
    if(pos.balance.column == "left" && pos.balance.size == "big"){
      lcol++;
      left = "balance";
      center = "lbalance"
      if(pos.trades.size == "big" && pos.trades.column == "left"){
        lcol++;
        if(pos.orders.column == "left"){
          left += " double";
          right = "nothing";
          center += " ldouble";
          lcol++;
        }else{
          left += " single";
          right = "single";
          center += " lsingle rsingle";
          rcol++;
        }
      }else if(pos.trades.size == "big" && pos.trades.column == "right"){
        rcol++;
        if(pos.orders.column == "left"){
          left += " single";
          right = "single";
          center += " lsingle rsingle";
          lcol++;
        }else{
          right = "double";
          center += " rdouble";
          rcol++;
        }
      }else if(pos.trades.size == "small" && pos.trades.column == "left"){
        left += " single";
        right = "nothing";
        center += " lsingle";
        lcol++;
        lcol++;
      }else{
        right = "single";
        center += " rsingle";
        rcol++;
        rcol++;
      }
    }else if(pos.balance.column == "right" && pos.balance.size == "big"){
      right = "balance";
      center = "rbalance";
      rcol++;
      if(pos.trades.size == "big" && pos.trades.column == "left"){
        lcol++;
        if(pos.orders.column == "left"){
          left = "double";
          center += " ldouble";
          lcol++;
        }else{
          left = "single";
          right += " single";
          center += " lsingle rsingle";
          rcol++;
        }
      }else if(pos.trades.size == "big" && pos.trades.column == "right"){
        rcol++;
        if(pos.orders.column == "left"){
          left = "single";
          right += " single";
          center += " lsingle rsingle";
          rcol++;
        }else{
          right += " double";
          center += " rdouble";
          rcol++;
        }
      }else if(pos.trades.size == "small" && pos.trades.column == "left"){
        left = "single";
        center += " lsingle";
        lcol++;
        lcol++;
      }else{
        right += " single";
        left = "nothing";
        center += " rsingle";
        rcol++;
        rcol++;
      }
    }else{
      if(pos.trades.column == "right" && pos.orders.column == "right"){
        right = "double";
        center = "rdouble";
        rcol++;
        rcol++;
        rcol++;
      }else if(pos.trades.column == "left" && pos.orders.column == "left"){
        left = "double";
        center = "ldouble";
        lcol++;
        lcol++;
        lcol++;
      }else{
        if(pos.trades.size == "small" && pos.trades.column == "right" ){
          rcol++;
        }else if(pos.trades.size == "small" && pos.trades.column == "left"){
          lcol++;
        }
        rcol++;
        lcol++;
        left = "single";
        right = "single";
        center = "lsingle rsingle";
      }
    }
    this.setState({rcol : rcol});
    this.setState({lcol : lcol});
    this.setState({left : left});
    this.setState({right : right});
    this.setState({center : center});
  },

  renderOpenorders(){
    return (
      <div className='ux fixorders container drag' ref="openorders" data-block="openorders">
        <div className='ui basic segment h100'>
          <h3 className='ui header'>MY ORDERS</h3>
          <OpenOrders
            pairId={this.data.pairId}
            valute1={this.props.active.toUpperCase().split("-")[0]}
            valute2={this.props.active.toUpperCase().split("-")[1]} />
        </div>
      </div>
    );
  },

  renderBalance(k){
    let fixclass="";
    if(
      this.state.fixclass &&
      (this.state.places.left.balance == 2 || this.state.places.right.balance == 2) &&
      this.positions.balance.size == "small"
    ){
      fixclass=" fixclass";
    }else{
      fixclass="";
    }
    return (
      <div key={k} className={"ux column balance " + (this.positions.balance.size == "big" ? "fullheight" : "semiheight" ) + fixclass + " padding drag"} ref="balance" data-block="balance">
        <div className='ui basic segment h100'>
          <h3 className='ui header'>BALANCE</h3>
          <Balance pairId={this.data.pairId} pair={this.data.pair} />
          <BuySell pairId={this.data.pairId} />
        </div>
      </div>
    );
  },

  renderOrders(k){
    let fixclass="";
    if(this.state.fixclass && (this.state.places.left.orders == 2 || this.state.places.right.orders == 2) && this.positions.orders.size == "small"){
      fixclass=" fixclass";
    }else{
      fixclass="";
    }
    return (
      <div key={k} className={"ux column orders " + (this.positions.orders.size == "big" ? "fullheight" : "semiheight" ) + fixclass + " padding drag"} ref="orders" data-block="orders">
        <div className='ui basic segment h100'>
            <h3 className='ui header'>ORDER BOOK</h3>
            <Orders direction='sell'
              pairId={this.data.pairId}
              valute1={this.props.active.toUpperCase().split("-")[0]}
              valute2={this.props.active.toUpperCase().split("-")[1]} />
        </div>
      </div>
    );
  },

  renderTrades(k){
    let fixclass="";
    if(this.state.fixclass && (this.state.places.left.trades == 2 || this.state.places.right.trades == 2) && this.positions.trades.size == "small"){
      fixclass=" fixclass";
    }else{
      fixclass="";
    }
    return (
      <div key={k} className={"ux column history " + (this.positions.trades.size == "big" ? "fullheight" : "semiheight" ) + fixclass + " padding drag"} ref="trades" data-block="trades">
        <div className='ui basic segment h100'>
          <h3 className='ui header'>TRADE HISTORY</h3>

            <Trades
              pairId={this.data.pairId}
              valute1={this.props.active.toUpperCase().split("-")[0]}
              valute2={this.props.active.toUpperCase().split("-")[1]} />

        </div>
      </div>
    );
  },

  renderRight(numb){
    return (
      _.map(this.state.places.right,(place, key)=>{
        if(place && place == numb){
          switch (key) {
            case "balance":
              ///console.log("right balance");
              return (
                this.renderBalance("bal")
              );
              break;
            case "orders":
              //console.log("right orders");
              return (
                this.renderOrders("ord")
              );
              break;
            case "trades":
              //console.log("right trades");
              return (
                this.renderTrades("trad")
              );
              break;
            default:
              null;
          }
        }
      })
    )
  },


  renderLeft(numb){
    return (
      _.map(this.state.places.left,(place, key)=>{
        if(place && place == numb){
          switch (key) {
            case "balance":
              ///console.log("right balance");
              return (
                this.renderBalance("bal")
              );
              break;
            case "orders":
              //console.log("right orders");
              return (
                this.renderOrders("ord")
              );
              break;
            case "trades":
              //console.log("right trades");
              return (
                this.renderTrades("trad")
              );
              break;
            default:
              null;
          }
        }
      })
    )
  },



  dragBlocks(){
    let $this = this;

    _.map(this.previousPlace,(place)=>{
      if(place && $(place).draggable( "instance" )){
        $(place).draggable( "destroy" );
      }
    })


    Meteor.setTimeout(()=>{
      $(".dragcontainer .drag").each((indx, element)=>{
        let el = $(element).attr('data-block');
        $this.previousPlace[el]=element;
      });
      $(".dragcontainer .drag").draggable({
        opacity: 0.7,
        stack: ".dragcontainer .drag",
        revert: true,
        revertDuration: false,
        handle: "h3",
        start: function() {
          let el = $(this).attr('data-block');
          $this.previousPlace[el]=this;
          $this.setState({leftofcharts : true});
          $this.setState({undertrades : true});
          $this.setState({abovetrades : true});
        },
        stop: function() {
          $this.setState({leftofcharts : false});
          $this.setState({undertrades : false});
          $this.setState({abovetrades : false});
        },
        drag:function(event, ui){

        }
      });
      $this.setState({dragorders : true});
    },300);

  },
  componentDidMount() {

    Dispatcher.register((e) => {
      //console.log('new dispatcher event', payload);
      switch (e.actionType) {
        case 'DRAG':
          if(!this.state.drag_on){
            this.dragBlocks();
            this.setState({drag_on: !this.state.drag_on});
          }else{
            _.map(this.previousPlace,(place)=>{
              if(place && $(place).draggable( "instance" )){
                $(place).draggable( "destroy" );
              }
            })
            this.setState({drag_on: !this.state.drag_on});
          }
          break;
      }
    });

    let $this = this;

    $('.dragholder').droppable({
      hoverClass: "morevisible",
      tolerance: "pointer",
      drop: function( event, ui ) {
        let places = $this.state.places;
        let el = $(ui.draggable).attr('data-block');
        let oldPosition = $this.positions[el];
        let position = $(this).attr('data-place').split("-");
        let newPosition = {
          column: position[0],
          place: parseInt(position[1]),
          size: position[2]
        };

        let fix1=false;
        //console.log("oldPosition");
        //console.log(oldPosition);
        // console.log({
        //   places: places,
        //   el: el,
        //   oldPosition: oldPosition,
        //   newPosition: newPosition,
        // });

        if(oldPosition.column == newPosition.column){ // column not changed
          _.each(places[oldPosition.column],(place, key)=>{
            if(place && key != el){ // change elements not dragged
              if(oldPosition.size == "small" && newPosition.size == "big"){
                $this.positions[key].size = "big";
                console.log(key + "1");
              }else{
                if (newPosition.place == oldPosition.place ) {
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    if($this.positions[key].size == "small"){
                      $this.positions[key].size = "big";
                      console.log(key + "2");
                    }else {
                      $this.positions[key].size = "small"
                      console.log(key + "3");
                    }
                  }else if(newPosition.size == "small") {
                    $this.positions[key].size = (
                      ( (place == (newPosition.place+1) && position[3]) || (place == (newPosition.place-1) && !position[3]) ) ?
                      "small" : "big"
                    );
                    console.log(key + "4");
                  }
                }else if(newPosition.place == oldPosition.place+1){
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    $this.positions[key].size = (
                      ( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ?
                      "small" : "big"
                    );
                    console.log(key + "5");
                  }else if(newPosition.size == "small") {
                    $this.positions[key].size = (
                      ( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ?
                      "small" : "big"
                    );
                    console.log(key + "6");
                  }
                }else if (newPosition.place == oldPosition.place-1) {
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    $this.positions[key].size = (
                      ( (place < newPosition.place && !position[3]) || (place == newPosition.place && !position[3]) ) ?
                      "small" : "big"
                    );
                    console.log(key + "7");
                  }else if(newPosition.size == "small") {
                    $this.positions[key].size = (
                      ( place == newPosition.place ) ?
                      "small" : "big"
                    );
                    console.log(key + "8");
                  }
                }else if ( ( newPosition.place == oldPosition.place + 2 ) || ( newPosition.place == oldPosition.place - 2 ) ) {
                  if(newPosition.size == "small") {
                    $this.positions[key].size = ( ( (place == newPosition.place) ) ? "small" : "big" );
                    console.log(key + "9");
                  }
                }
              }

              if(place >= oldPosition.place && place <= newPosition.place){
                console.log(place + " >= " + oldPosition.place + " && " + place + " >= " + newPosition.place);
                if( places[oldPosition.column][key] > 1 ){
                  places[oldPosition.column][key]--;
                  console.log(key + " - " + " : " + places[oldPosition.column][key]);
                }
              }else if(place <= oldPosition.place && place >= newPosition.place){
                if( places[oldPosition.column][key] < 3 ){
                  places[oldPosition.column][key]++;
                  console.log(key + " + " + " : " + places[oldPosition.column][key]);
                }
              }
              if( places[oldPosition.column][key] == 3 && $this.positions[key].size == "big" ){
                fix1 = true;
                console.log("fix 1");
                console.log(key);
              }
            }else if(key == el){
              places[oldPosition.column][key] = newPosition.place;
              console.log(key + " : " + places[oldPosition.column][key]);
            }



          });
        }else{ // column changed
          _.each(places[oldPosition.column],(place, key)=>{ // changes in column where it goes from
            if(place && key != el){
              if(oldPosition.size == "small"){
                $this.positions[key].size = "big";
              }
              if( place > oldPosition.place ){
                if( places[oldPosition.column][key] > 1 ){
                  places[oldPosition.column][key]--;
                }
              }
            }else if(key == el){
              places[oldPosition.column][key] = false;
            }
          });
          _.each(places[newPosition.column],(place, key)=>{ // changes in column where it goes to
            if(place && key != el){ // change elements not dragged
              if(newPosition.size == "small"){
                if(newPosition.place == 1){
                  $this.positions[key].size = ( ( (place == newPosition.place) ) ? "small" : "big" );
                }else if(newPosition.place == 2){
                  $this.positions[key].size = (
                     ( (place < newPosition.place && !position[3]) || (place == newPosition.place && position[3]) ) ?
                     "small" : "big"
                   );
                }else if(newPosition.place == 3){
                  $this.positions[key].size = ( ( (place == newPosition.place - 1) ) ? "small" : "big" );
                }
              }
              if( places[newPosition.column][key] == 3 && $this.positions[key].size == "big" ){
                fix1 = true;
                console.log("fix 2");
              }
            }else if(key == el){
              places[newPosition.column][key] = newPosition.place;
              $this.positions[key].place = newPosition.place;
              console.log(key + " : " + places[newPosition.column][key]);
            }
            if( place >= newPosition.place ){
              places[newPosition.column][key]++;
              $this.positions[key].place = places[newPosition.column][key];
              console.log(key + " : " + places[newPosition.column][key]);
            }

          });
        }

        if(newPosition.place == 3 && newPosition.size == "big"){
          fix1 = true;
          console.log("fix 3");
        }

        $this.setState({places: places});
        //console.log(el);
        $this.setState({fixclass: fix1});
        $this.positions[el] = newPosition;


        Meteor.setTimeout(()=>{
          console.log(places);
          $this.dragBlocks();
          $this.wides();
        },500);
      }
    });

    this.wides();
    this.dragBlocks();

  },

  render() {
    return (
      <div className="ui main fluid container">
        <div className={"ux grid fullheight " + ( this.state.drag_on ? "dragcontainer " : "") + this.state.center}>
          <div className={"ux column left fullheight " + this.state.left}>
            {this.renderLeft(1)}
            {this.renderLeft(2)}
            {this.renderLeft(3)}

            <div className={"dragholders left ui grid" + (this.state.undertrades?"":" hidden")} ref="ldragholders">
              <div className="five column row">
                <div className="column">
                  <div className={"dragholder first big" + (this.state.undertrades?"":" hidden")} data-place="left-1-big"></div>
                </div>
                <div className="column">
                  <div className={"dragholder first small" + (this.state.undertrades?"":" hidden")} data-place="left-1-small-2"></div>
                  <div className={"dragholder second small" + (this.state.undertrades?"":" hidden")} data-place="left-2-small"></div>
                </div>
                <div className="column">
                  <div className={"dragholder second big" + (this.state.undertrades?"":" hidden")} data-place="left-2-big"></div>
                </div>
                <div className="column">
                  <div className={"dragholder second small" + (this.state.undertrades?"":" hidden")} data-place="left-2-small-2"></div>
                  <div className={"dragholder third small" + (this.state.undertrades?"":" hidden")} data-place="left-3-small"></div>
                </div>
                <div className="column">
                  <div className={"dragholder third big" + (this.state.undertrades?"":" hidden")} data-place="left-3-big"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ux column center fullheight">
            <div className='ux column chart padding'>
              <div className='ux container fix400'>
                <div className='ux fixchart container drag' ref="charts">
                  <div className='ui basic segment h100'>
                    <h3 className='ui header'>PRICE CHART</h3>
                      <div className='ui basic teal segment nopadding'>
                        <div className='ui top attached tabular basic menu'>
                          <div className='right menu' ref='chartType'>
                            <a className='item active' onClick={this.showCandle}>
                              CandleStick
                            </a>
                            <a className='item' onClick={this.showLine}>
                              Line
                            </a>
                            <a className='item' onClick={this.showMACD}>
                              MACD
                            </a>
                            <a className='item' onClick={this.showRSI}>
                              RSI
                            </a>
                            <a className='item' onClick={this.showSTO}>
                              STO
                            </a>
                            <a className='item' onClick={this.showBollinger}>
                              Bollinger
                            </a>
                            <a className='item' onClick={this.showKagi}>
                              Kagi
                            </a>
                            <a className='item' onClick={this.showPointandFigure}>
                              P & F
                            </a>
                            <a className='item' onClick={this.showHaikinAshi}>
                              HaikinAshi
                            </a>
                            <a className='item' onClick={this.showRenko}>
                              Renko
                            </a>
                          </div>
                        </div>
                        <div className='ui basic segment nopadding'>
                          {
                            this.data.BTPR_Loading ? <div className='cube'></div> :
                            this.renderBlockChainIndicator()
                          }
                        </div>
                    </div>
                  </div>
                </div>
                <div className='ux fixorders container drag' ref="openorders" data-block="openorders">
                  <div className='ui basic segment h100'>
                    <h3 className='ui header'>MY ORDERS</h3>
                    <OpenOrders
                      pairId={this.data.pairId}
                      valute1={this.props.active.toUpperCase().split("-")[0]}
                      valute2={this.props.active.toUpperCase().split("-")[1]} />
                  </div>
                </div>
              </div>
              <div className={"dragholder leftofcharts" + (this.state.leftofcharts?"":" hidden")} ref="leftofcharts">
                +
              </div>
            </div>
          </div>
          <div className={"ux column right fullheight " + this.state.right}>

            { this.renderRight(1) }
            { this.renderRight(2) }
            { this.renderRight(3) }

            <div className={"dragholders right ui grid" + (this.state.undertrades?"":" hidden")} ref="ldragholders">
              <div className="five column row">
                <div className="column">
                  <div className={"dragholder first big" + (this.state.undertrades?"":" hidden")} data-place="right-1-big"></div>
                </div>
                <div className="column">
                  <div className={"dragholder first small" + (this.state.undertrades?"":" hidden")} data-place="right-1-small-2"></div>
                  <div className={"dragholder second small" + (this.state.undertrades?"":" hidden")} data-place="right-2-small"></div>
                </div>
                <div className="column">
                  <div className={"dragholder second big" + (this.state.undertrades?"":" hidden")} data-place="right-2-big"></div>
                </div>
                <div className="column">
                  <div className={"dragholder second small" + (this.state.undertrades?"":" hidden")} data-place="right-2-small-2"></div>
                  <div className={"dragholder third small" + (this.state.undertrades?"":" hidden")} data-place="right-3-small"></div>
                </div>
                <div className="column">
                  <div className={"dragholder third big" + (this.state.undertrades?"":" hidden")} data-place="right-3-big"></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});
