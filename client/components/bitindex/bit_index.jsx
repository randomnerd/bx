

BitIndex = React.createClass({

  mixins: [ReactMeteorData],

  getMeteorData() {

    var handle_BTTC = Meteor.subscribe("BitIndexIndicator_BTTC");
    var handle_BTTN = Meteor.subscribe("BitIndexIndicator_BTTN");
    var handle_BTPR = Meteor.subscribe("BitIndexIndicator_BTPR");
    var handle_BTUA = Meteor.subscribe("BitIndexIndicator_BTUA");

    return {

      BTTC_Loading: !handle_BTTC.ready(),
      BTTN_Loading: !handle_BTTN.ready(),
      BTPR_Loading: !handle_BTPR.ready(),
      BTUA_Loading: !handle_BTUA.ready(),

        BTTC: BitIndexIndicator_BTTC.find().fetch(),
        BTTN: BitIndexIndicator_BTTN.find().fetch(),
        BTPR: BitIndexIndicator_BTPR.find().fetch(),
        BTUA: BitIndexIndicator_BTUA.find().fetch(),

    }
  },

  componentDidMount() {
    //  console.log(this.data.CURPR)
  },

  renderBlockChainIndicator() {

    // let data = this.data.BTTC.map( (item) => {
    //   return {
    //     date: item.date,
    //     close: item.close,
    //   };
    //
    // });
    // console.log(data);
    // <AreaChart data={this.data.BTTC} />
    // <AreaChart data={this.data.BTTN} />

    return (
      <div>
        <CandleStickChartWithFullStochasticsIndicator data = {this.data.BTPR} type = "svg" />
        <CandleStickChartWithRSIIndicator data = {this.data.BTPR} type = "svg" />

        <CandleStickChartWithBollingerBandOverlay data = {this.data.BTPR} type = "svg" />

        <HaikinAshi data = {this.data.BTPR} type = "hybrid"/>


        <AreaChartFixed data = {this.data.BTTC} type = "svg"/>
        <AreaChartFixed data = {this.data.BTTN} type = "svg"/>
        <AreaChartFixed data = {this.data.BTUA} type = "svg"/>


      </div>
    );

  },



  render() {

     if (this.data.BTPR_Loading) {

        return (

          			<div className={"cube-grid"}>

                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>
                     <div className="cube"></div>

                 </div>
        );

    } else {

      return (
              <div>
                    BitIndex
                    { this.renderBlockChainIndicator() }
               </div>

      );
    }

}
});