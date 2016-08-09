import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'cerebral-view-react';
import {Currencies, TradePairs, BitIndexIndicator_BTPR, PairTypes, PairGroups} from '../../both/collections';
import {Meteor} from 'meteor/meteor';
import LandingTrades from './trade/landing_trades';
import LandingOrders from './trade/landing_orders';
import { createContainer } from 'meteor/react-meteor-data';

const Home = connect({
  user: ['user'],
  title: ['home', 'title'],
  layout: ['layout'],
  pair_link: ['pair_link'],
  pair: ['pair', 'pair'],
  tools: ['tools']
}, class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      panel: false,
      icons: true,
      holder: false,
      scroller: 0,
      scroll: 1
    };
  }

  componentDidMount() {
    $('.groupmenu').dropdown({on: 'hover', action: 'hide'});

    let ld = $(this.refs.ld);

    let h = ld.height();
    let hIco = $(this.refs.icons).height();
    let hBignum = $(this.refs.bignum).height();
    let hCurrs = $(this.refs.currs).height();
    hCurrs = h*2;
    let hPanel = h;

    let $this = this;

    $(window).resize(()=>{
      ld = $(this.refs.ld);

      h = ld.height();
      hIco = $(this.refs.icons).height();
      hBignum = $(this.refs.bignum).height();
      hCurrs = h*2;

      hPanel = h;
    });

    $(this.refs.ld).scroll(()=>{

      if(!this.state.holder){
        this.setState({ holder : true });
        let realScroll = ld.scrollTop();
        if(this.state.scroll == 1 && realScroll > this.state.scroller){
          this.scrollingTo(hPanel, 2);
          //console.log(hPanel);
          //this.props.signals.tools.infoPanel({action:'show'});
        }else if(this.state.scroll == 2 && realScroll < this.state.scroller){
          this.scrollingTo(0, 1);
          //console.log(2);
          //this.props.signals.tools.infoPanel({action:'hide'});
        }
        else if(this.state.scroll == 2 && realScroll > this.state.scroller){
          this.scrollingTo(hCurrs, 3);
          //console.log(hCurrs);
          //this.props.signals.tools.infoPanel({action:'hide'});
        }else if(this.state.scroll == 3 && realScroll < this.state.scroller){
          this.scrollingTo(hPanel, 2);
          //console.log(hPanel);
          //this.props.signals.tools.infoPanel({action:'show'});
        }
        else{
          this.setState({ holder : false });
        }
      }


    });
  }

  showSignUpModal() {
    this.props.signals.user.signUpClicked();
  }
  scrollingTo(h,$scroll){
    let $this = this;
    $(this.refs.ld).animate(
      {scrollTop:h},
      {
        duration: 500,
        //easing: 'swing',
        complete: ()=>{
          $this.setState({ scroller : $(this.refs.ld).scrollTop() });
          $this.setState({ scroll : $scroll });
          Meteor.setTimeout(
            () => {
              $this.setState({ holder : false });
            },
            500
          )
        }
      }
    );
  }
  scrollAll(){
    $(this.refs.ld).scrollTop(1).scroll();
  }

  marketName(id) {
    let curr = _.findWhere(this.props.markets, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }

  marketPairs(id) {
    let markets = _.where(this.props.pairs, {
      market: id
    });
    // console.log('markets');
    // console.log(markets);
    let mIds = [];
    for(let market of markets) {
      mIds.push(market._id);
    }
    return {$in: mIds};
  }
  currName(id) {
    let curr = _.findWhere(this.props.currencies, {
      _id: id
    });
    return curr
      ? curr.shortName
      : '';
  }
  renderPairsInGroup(group){

    return this.props.pairs.map((pair) => {
      //console.log(this.props.currencies);
      if(_.contains(group, pair._id)){
        return (
          <a className='item'
          key = {pair.permalink}
          href = {'/pair/' + pair.permalink}>
            <div className="ui label">{pair.dayVolume? (parseFloat(pair.dayVolume)/100000000).toFixed(4) : 0.0000}</div>
            {this.currName(pair.currId).toUpperCase()} / {this.currName(pair.marketCurrId).toUpperCase()}
          </a>
        );
      }
    });
  }

  renderGroups(market){
    let groups = _.where(this.props.groups, {market: market._id});
    return groups.map((item) => {
      if(item.published){
        let pair_ids = {$in: item.pairs};
        let tradeCount = parseFloat(item.tradesCount)||1;
        let orderCount = parseFloat(item.ordersCount)||1;
        return (
          <div>
            <div className="subheader">
              <div className="ui dropdown groupmenu">
                <div className="text">{item.name}</div>
                <i className="dropdown icon"></i>
                <div className='ui vertical menu pairs'>
                  {this.renderPairsInGroup(item.pairs)}
                </div>
              </div>
            </div>
            <div className="content">
              <LandingTrades limit={tradeCount} pair_ids={pair_ids} {...this.props}/>
            </div>
            <div className="content">
              <LandingOrders limit={orderCount} pair_ids={pair_ids} {...this.props}/>
            </div>
          </div>
        );
      }else{
        return (
          <div className="not-available">
            <div className="subheader">
              {item.name}
            </div>
            <div className="content">
              coming soon
            </div>
          </div>
        );
      }
    });
  }
  renderMarkets(){
    return this.props.markets.map((item) => {
      return (
        <div className="ui segment bloc">
          <div className="ui header">
            {item.name}
          </div>
          {this.renderGroups(item)}
        </div>
      );
    });
  }
  render() {
    return (
      <div className={"ld2" + (!this.state.holder?" scroll":"")} ref="ld2">
        <div className={"ld" + (this.state.holder?" noscroll":"")} ref="ld">
          <div className="block background">

          </div>
          <div className="block opacity">
            <div className="ui grid">
              <div className="stackable two column row">
                <div className="column ui inverted newgrey sw">
                  <div className="switcher">
                    {this.renderMarkets()}
                  </div>
                </div>
                <div className="promo column">
                  <h1><img src="/dao_logo_big.png" /></h1>
                  <p>Token contraсts. Digital startup shares. Crypto currencies.</p>
                  <h3>All in one place. All stored in blockchain.</h3>
                  <p>DAO Stock is an exchange platform where buyers and sellers consummating
                     transactions of digital assets trading (DAO tokens, digital currency) at a
                     decentral location - public blockchain, operated by decentral autonomous
                     organization that facilitates, verifies, enforces the negotiation and
                     performs the agent's contract.</p>

                  { this.props.user ? <div>
                    <a className="ui massive teal button" onClick={this.showSignUpModal.bind(this)}>create account</a>

                    <button className="ui normal big positive button hidden">Sign in with Coinbase</button>
                  </div> : null }
                  <a className="ui massive icon button scrolldown" onClick={this.scrollAll.bind(this)}>
                    <i className="down arrow icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="block white" ref="bignum">
            <div className="ui grid">
              <div className="stackable two column row">
                <div className="promo column">
                  <h1><br />
                    Our<br />
                    Commitment<br />
                    to<br />
                    <strong>Safety</strong>
                  </h1>
                </div>
                <div className="promo column">
                  <h1><br /></h1>
                  <h2>Store trading data in to Blockchain</h2>
                  <p>We store all the trading data in to our private Blockchain
                      so you can be sure that every little process and trade on our
                      market will not be lost or compromised.</p>

                  <h2>Ice Box - Cold Storage</h2>
                  <p>Icebox is a simple Ether cold storage solution based on Lightwallet.
                  It makes it easy to securely generate new keys and addresses on an
                  airgapped device as well as spend from those addresses.</p>

                  <h2>Trustless Token Management</h2>
                  <p>Trustless (Contract Controlled) Token Management extends
                  the managed Account function of DAO to be able to manage all
                  tokens and token sets which will ever exist.</p>

                </div>
              </div>
            </div>
          </div>
          <div className="block white" ref="currs">
            <div className="ui grid">
              <div className="stackable two column row">
                <div className="promo column">
                  <h1><br />
                    Dedicated<br />
                    Customer<br />
                    <strong>Support</strong>
                  </h1>
                </div>
                <div className="promo column">
                  <h1><br /></h1>
                  <h3>Blah blah blah</h3>
                  <p>Our Incident Management System (IMS) has integrated with ethereum blockchain solve any problem.</p>


                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    );
  }

});
export default HomeContainer = createContainer((props) => {
  let handle_BTPR = Meteor.subscribe('BitIndexIndicator_BTPR');
  let pair = TradePairs.findOne();
  return {
    pair: pair,
    pairs: TradePairs.find().fetch(),
    BTPR_Loading: !handle_BTPR.ready(),
    BTPR: BitIndexIndicator_BTPR.find().fetch(),
    pairId: pair && pair._id,
    user: Meteor.user(),
    markets: PairTypes.find().fetch(),
    groups: PairGroups.find().fetch(),
    currencies: Currencies.find({ published: true }, { sort: { name: 1 } }).fetch()
  };
}, Home);
