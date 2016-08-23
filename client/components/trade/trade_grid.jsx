import React from 'react';
import { Meteor } from 'meteor/meteor';
import { connect } from 'cerebral-view-react';
import { createContainer } from 'meteor/react-meteor-data';
import { Currencies, TradePairs, ChartItems } from '../../../both/collections';
import BuySell from './buysell';
import Trades from './lastTrades';
import Charts from '../bitindex';
import Orders from './orderbook';
import OpenOrders from './open_orders';
import Balance from './balance';

const TradeGrid = connect({
  layout: 'layout',
  pair_link: 'pair_link',
  pair: 'pair.pair',
  tools: 'tools'
}, class TradeGrid extends React.Component {
  state = {
    chartType: 'candle',
    drag_on: false,
    dragging: false,
    drag_el: false,
    left: 'balance',
    right: 'single',
    center: 'lbalance rsingle',
    lcol: 1,
    rcol: 1,
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
  }

  positions = {
    orders: {
      column: 'right',
      place: 1,
      size: "small",
      top: false
    },
    trades: {
      column: 'right',
      place: 2,
      size: "small",
      top: false
    },
    balance: {
      column: 'left',
      place: 1,
      size: "big",
      top: false
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
    }
  }

  previousPlace = {
    orders: false,
    trades: false,
    openorders: false,
    balance: false
  }

  // getPlacesLeft(){
  //   return [
  //     this.state.places.left
  //   ]
  // },

  chartItemsPrepare(list) {
    return list.map((item) => {
      return {
        pairId: item.pairId,
        date: item.time,
        open: (item.open / Math.pow(10, 8)).toFixed(8),
        high: (item.high / Math.pow(10, 8)).toFixed(8),
        low: (item.low / Math.pow(10, 8)).toFixed(8),
        close: (item.close / Math.pow(10, 8)).toFixed(8),
        volume: (item.volume / Math.pow(10,8)).toFixed(8),
      };
    });
  }

  currName(id) {
    let curr = _.findWhere(this.props.currencies, {_id: id});
    return curr ? curr.shortName : '';
  }

  renderChart() {
    if (this.props.chartItems.length <= 2 ) return (
      <div className="not-available">
        <div className="content">No data yet</div>
      </div>
    );
    return (
      <Charts.candelstick_intra_day_cont
        data={this.chartItemsPrepare(this.props.chartItems)}
        type='svg'
        pairText={this.currName(this.props.pair.currId) + ' / ' + this.currName(this.props.pair.marketCurrId)}
      />
    );
  }

  wides() {
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
  }

  renderOpenorders(){
    if(this.props.pairId){
      return (
        <div className='ux fixorders container drag' ref="openorders" data-block="openorders">
          <div className='ui basic segment h100'>
            <h3 className='ui header'>MY ORDERS</h3>
            <OpenOrders
              pairId={this.props.pair._id}
              valute1={this.props.pair.currId}
              valute2={this.props.pair.marketCurrId} />
          </div>
        </div>
      );
    }
  }

  renderBalance(k){
    let pair = this.props.pair||null;
    let pairId = pair && pair._id
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
          <Balance wide={this.positions.balance.size == "small" ? "double" : false} {...this.props}/>
          <BuySell wide={this.positions.balance.size == "small" ? "double" : false} {...this.props}/>
        </div>
      </div>
    );
  }

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
              pair={this.props.pair}
              pairId={this.props.pair._id}
              valute1={this.props.pair_link&&this.props.pair_link.toUpperCase().split("-")[0]}
              valute2={this.props.pair_link&&this.props.pair_link.toUpperCase().split("-")[1]} />
        </div>
      </div>
    );
  }

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
              pair={this.props.pair}
              pairId={this.props.pair._id}
              valute1={this.props.pair_link&&this.props.pair_link.toUpperCase().split("-")[0]}
              valute2={this.props.pair_link&&this.props.pair_link.toUpperCase().split("-")[1]} />

        </div>
      </div>
    );
  }

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
  }

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
  }

  dragBlocks(){
    let $this = this;

    _.map(this.previousPlace,(place)=>{
      if(place && $(place).draggable( "instance" )){
        $(place).draggable( "destroy" );
      }
    });

    let dragTimer = Meteor.setTimeout(()=>{
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
          $this.setState({dragging : $this.positions[el].column});
          $this.setState({drag_el : el});
        },
        stop: function() {
          $this.setState({dragging : false});
          $this.setState({drag_el : false});
        },
        drag:function(event, ui){

        }
      });
      $this.setState({dragorders : true});
    }, 200);
    this.setState({dragTimer});

  }
  componentWillUnmount(){
    _.map(this.previousPlace,(place)=>{
      if (place && $(place).draggable( "instance" )){
        $(place).draggable( "destroy" );
      }
    });
    // this.setState({drag_on: false});
    this.props.signals.tools.dragToggle({action:"off"});
    if (this.state.dragTimer) Meteor.clearTimeout(this.state.dragTimer);
  }
  componentWillReceiveProps(newProps){
    let dragReset = newProps.tools.dragReset;
    if(dragReset){
      this.positions = this.props.user.profile.blocs;
      let places = this.state.places;
      _.each(this.props.user.profile.blocs, (item, key)=>{
        if(item.place == 3 && item.size == "big"){
          this.setState({fixclass: true});
        }
        if(item.column == "right"){
          places.right[key]=item.place;
          places.left[key]=false;
        }else if(item.column == "left"){
          places.left[key]=item.place;
          places.right[key]=false;
        }
      });
      Meteor.setTimeout(()=>{
        //console.log(places);
        this.setState({places: places});
      },200);
      this.wides();
    }
    if(newProps.tools.drag){
      this.dragBlocks();
    }else{
      _.map(this.previousPlace,(place)=>{
        if(place && $(place).draggable( "instance" )){
          $(place).draggable( "destroy" );
        }
      })
      if(!dragReset){
        Meteor.call('userblocs/update', this.positions , (err, result) => {
           if(err) console.log(err.message);
        });
        //this.props.signals.tools.dragReset({action:"off"});
      }
      this.props.signals.tools.dragReset({action:"off"});
    }
  }

  componentDidMount() {
    if(!this.props.user){
      //FlowRouter.go("/");
      return;
    }
    if(this.props.user.profile && this.props.user.profile.blocs){
      let places = this.state.places;
      this.positions = this.props.user.profile.blocs;
      _.each(this.props.user.profile.blocs, (item, key)=>{
        if(item.place == 3 && item.size == "big"){
          this.setState({fixclass: true});
        }
        if(item.column == "right"){
          places.right[key]=item.place;
          places.left[key]=false;
        }else if(item.column == "left"){
          places.left[key]=item.place;
          places.right[key]=false;
        }
      });
      //Meteor.setTimeout(()=>{
        //console.log(places);
        this.setState({places: places});
      //}, 1400);
    }

    let $this = this;

    $('.dragholder').droppable({
      hoverClass: "morevisible",
      tolerance: "pointer",
      drop: function( event, ui ) {
        if(!$(this).hasClass('dragholder')) return;
        let places = $this.state.places;
        let el = $(ui.draggable).attr('data-block');
        let oldPosition = $this.positions[el];
        let position = $(this).attr('data-place').split("-");
        let newPosition = {
          column: position[0],
          place: parseInt(position[1]),
          size: position[2],
          top: position[3]?true:false
        };
        let ct="";
        let fix1=false;
        //console.log($this.positions);
        // console.log(oldPosition);
        // console.log({
        //   places: places,
        //   el: el,
        //   oldPosition: oldPosition,
        //   newPosition: newPosition,
        // });

        if(oldPosition.column == newPosition.column){ // column not changed
          ct += "column not changed, ";
          _.each(places[oldPosition.column],(place, key)=>{
            if(place && key != el){ // change elements not dragged
              if(oldPosition.size == "small" && newPosition.size == "big"){
                $this.positions[key].size = "big";
                ct += key + " was small and now is big (case 1), ";
              }else{
                if (newPosition.place == oldPosition.place ) {
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    if($this.positions[key].size == "small"){
                      $this.positions[key].size = "big";
                      ct += key + " was small and now is big without dragged (case 2), ";
                    }else {
                      $this.positions[key].size = "small"
                      ct += key + " was big and now is small without dragged (case 3), ";
                    }
                  }else if(newPosition.size == "small") {
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place == (newPosition.place+1) && position[3]) || (place == (newPosition.place-1) && !position[3]) ) ? "small" : "big")  + " (case 4), ";

                    $this.positions[key].size = (
                      ( (place == (newPosition.place+1) && position[3]) || (place == (newPosition.place-1) && !position[3]) ) ?
                      "small" : "big"
                    );
                  }else{
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place == (newPosition.place+1) && position[3]) || (place == (newPosition.place-1) && !position[3]) ) ? "small" : "big")  + " (case 5), ";
                  }
                }else if(newPosition.place == oldPosition.place+1){
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ? "small" : "big")  + " (case 6), ";

                    $this.positions[key].size = (
                      ( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ?
                      "small" : "big"
                    );
                  }else if(newPosition.size == "small") {
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ? "small" : "big")  + " (case 7), ";

                    $this.positions[key].size = (
                      ( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ?
                      "small" : "big"
                    );
                  }else{
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place > newPosition.place && position[3]) || (place == newPosition.place && !position[3]) ) ? "small" : "big")  + " (case 8), ";
                  }
                }else if (newPosition.place == oldPosition.place-1) {
                  if(oldPosition.size == "small" && newPosition.size == "small"){
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( (place < newPosition.place && !position[3]) || (place == newPosition.place && !position[3]) ) ? "small" : "big")  + " (case 9), ";

                    $this.positions[key].size = (
                      ( (place < newPosition.place && !position[3]) || (place == newPosition.place && position[3]) ) ?
                      "small" : "big"
                    );
                  }else if(newPosition.size == "small") {
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place + " and now is " +
                    (( place == newPosition.place ) ? "small" : "big")  + " (case 10), ";

                    $this.positions[key].size = (
                      ( place == newPosition.place ) ?
                      "small" : "big"
                    );
                  }else{
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place + " and now is " +
                    (( place == newPosition.place ) ? "small" : "big")  + " (case 11), ";
                  }
                }else if ( ( newPosition.place == oldPosition.place + 2 ) || ( newPosition.place == oldPosition.place - 2 ) ) {
                  if(newPosition.size == "small") {
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( place == newPosition.place ) ? "small" : "big")  + " (case 12), ";

                    $this.positions[key].size = ( ( (place == newPosition.place) ) ? "small" : "big" );
                  }else{
                    ct += key + " was " + $this.positions[key].size + " on " + $this.positions[key].place  + " and now is " +
                    (( place == newPosition.place ) ? "small" : "big")  + " (case 13), ";
                  }
                }
              }

              if(place >= oldPosition.place && place <= newPosition.place){
                //console.log(place + " >= " + oldPosition.place + " && " + place + " <= " + newPosition.place);
                if( places[oldPosition.column][key] > 1 ){
                  places[oldPosition.column][key]--;
                  $this.positions[key].place = places[oldPosition.column][key];
                  //console.log(key + " - " + " : " + places[oldPosition.column][key]);
                }
              }else if(place <= oldPosition.place && place >= newPosition.place){
                if( places[oldPosition.column][key] < 3 ){
                  places[oldPosition.column][key]++;
                  $this.positions[key].place = places[oldPosition.column][key];
                  //console.log(key + " + " + " : " + places[oldPosition.column][key]);
                }
              }
              if( places[oldPosition.column][key] == 3 && $this.positions[key].size == "big" ){
                fix1 = true;
                //console.log("fix 1");
                //console.log(key);
              }
            }else if(key == el){
              places[oldPosition.column][key] = newPosition.place;
              //console.log(key + " : " + places[oldPosition.column][key]);
            }




          });
        }else{ // column changed
          ct += "column was changed, ";
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
              $this.positions[key].place = places[oldPosition.column][key];
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
                  $this.positions[key].size = ( (place == 2) ? "small" : "big" );
                }



              }

            }else if(key == el){
              places[newPosition.column][key] = newPosition.place;
              $this.positions[key].place = newPosition.place;
              //console.log(key + " : " + places[newPosition.column][key]);
              if(newPosition.place == 3 && newPosition.size == "big"){
                fix1 = true;
                //console.log("fix 2");
              }
            }
            if( place >= newPosition.place ){
              places[newPosition.column][key]++;
              $this.positions[key].place = places[newPosition.column][key];
              //console.log(key + " : " + places[newPosition.column][key]);
              if( places[newPosition.column][key] == 3 && $this.positions[key].size == "big" ){
                fix1 = true;
                //console.log("fix 2");
              }
            }

          });
        }

        if(newPosition.place == 3 && newPosition.size == "big"){
          fix1 = true;
          //console.log("fix 3");
        }

        $this.setState({places: places});
        //console.log(el);
        $this.setState({fixclass: fix1});
        $this.positions[el] = newPosition;


        Meteor.setTimeout(()=>{
          //console.log(ct);
          $(ui.draggable).css("top","");
          $this.dragBlocks();
          $this.wides();
        },200);
      }
    });

    this.wides();
    this.dragBlocks();
    //  console.log(this.props.BTPR.slice(200));

  }

  render() {
    let lcol = this.state.lcol;
    let rcol = this.state.rcol;
    let invisible = "";
    if(this.state.drag_el){
      let drag_el = this.positions[this.state.drag_el];
      invisible = drag_el.column + "-" + drag_el.place + "-" + drag_el.size+(drag_el.top?"-top":"");
    }
    if(this.state.dragging == "left"){
      rcol++;
      //lcol=lcol==1?0:lcol;
      //lcol--;
    }else if(this.state.dragging == "right"){
      lcol++;
      //rcol=rcol==1?0:rcol;
      //rcol--;
    }
    return (
      <div className="ui main fluid container">
        <div className={"ux grid fullheight " + ( this.props.tools.drag ? "dragcontainer " : "") + this.state.center}>
          <div className={"ux column left fullheight " + this.state.left}>
            {this.renderLeft(1)}
            {this.renderLeft(2)}
            {this.renderLeft(3)}

            <div className={"dragholders left ui grid" + (this.state.dragging?"":" hidden")} ref="ldragholders">
              <div className={( lcol > 2 ? "five" : (lcol > 1? "three" : "one")) + " column row"} >
                <div className="column">
                  <div className={"first big" + ((lcol > 0)?"":" hidden") + ((invisible != "left-1-big")?" dragholder":" selfholder")} data-place="left-1-big"></div>
                </div>
                <div className="column">
                  <div className={"first small" + ((lcol > 1)?"":" hidden") + ((invisible != "left-1-small-top")?" dragholder":" selfholder")} data-place="left-1-small-top"></div>
                  <div className={"second small" + ((lcol > 1)?"":" hidden") + ((invisible != "left-2-small")?" dragholder":" selfholder")} data-place="left-2-small"></div>
                </div>
                <div className="column">
                  <div className={"second big" + ((lcol > 1)?"":" hidden") + ((invisible != "left-2-big")?" dragholder":" selfholder")} data-place="left-2-big"></div>
                </div>
                <div className="column">
                  <div className={"second small" + ((lcol > 2)?"":" hidden") + ((invisible != "left-2-small-top")?" dragholder":" selfholder")} data-place="left-2-small-top"></div>
                  <div className={"third small" + ((lcol > 2)?"":" hidden") + ((invisible != "left-3-small")?" dragholder":" selfholder")} data-place="left-3-small"></div>
                </div>
                <div className="column">
                  <div className={"third big" + ((lcol > 2)?"":" hidden") + ((invisible != "left-3-big")?" dragholder":" selfholder")} data-place="left-3-big"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ux column center fullheight">
            <div className='ux column chart padding'>
              <div className='ux container fix400'>
                <div className='ux fixchart container' ref="charts">
                  <div className='ui basic segment h100'>
                    <h3 className='ui header'>PRICE CHART</h3>
                      <div className='ui basic teal segment nopadding'>
                        <div className='ui basic segment nopadding'>
                          { this.renderChart() }
                        </div>
                    </div>
                  </div>
                </div>
                {this.renderOpenorders()}
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

            <div className={"dragholders right ui grid" + (this.state.dragging?"":" hidden")} ref="rdragholders" >
            <div className={( rcol > 2 ? "five" : (rcol > 1 ? "three" : "one" )) + " column row"} >
              <div className="column">
                <div className={"first big" + ((rcol > 0)?"":" hidden") + ((invisible != "right-1-big")?" dragholder":" selfholder")} data-place="right-1-big"></div>
              </div>
              <div className="column">
                <div className={"first small" + ((rcol > 1)?"":" hidden") + ((invisible != "right-1-small-top")?" dragholder":" selfholder")} data-place="right-1-small-top"></div>
                <div className={"second small" + ((rcol > 1)?"":" hidden") + ((invisible != "right-2-small")?" dragholder":" selfholder")} data-place="right-2-small"></div>
              </div>
              <div className="column">
                <div className={"second big" + ((rcol > 1)?"":" hidden") + ((invisible != "right-2-big")?" dragholder":" selfholder")} data-place="right-2-big"></div>
              </div>
              <div className="column">
                <div className={"second small" + ((rcol > 2)?"":" hidden") + ((invisible != "right-2-small-top")?" dragholder":" selfholder")} data-place="right-2-small-top"></div>
                <div className={"third small" + ((rcol > 2)?"":" hidden") + ((invisible != "right-3-small")?" dragholder":" selfholder")} data-place="right-3-small"></div>
              </div>
              <div className="column">
                <div className={"third big" + ((rcol > 2)?"":" hidden") + ((invisible != "right-3-big")?" dragholder":" selfholder")} data-place="right-3-big"></div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
});

export default TradeGridContainer = createContainer((props) => {
  let pair = TradePairs.findOne({permalink: props.pair_link});

  return {
    pair: pair,
    pairId: pair && pair._id,
    user: Meteor.user(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch(),
    chartItems: ChartItems.find({ pairId: pair._id }).fetch(),
  };
}, TradeGrid);
