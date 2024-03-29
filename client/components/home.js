import React from 'react';
import {connect} from 'cerebral-view-react';

const Home = connect({
  user: ['user'],
  title: ['home', 'title']
}, class Home extends React.Component {
  state = {
    panel: false,
    icons: true,
    holder: false,
    scroller: 0,
    scroll: 1
  }

  componentDidMount() {

    let ld = $(this.refs.ld);

    let h = ld.height();
    let hIco = $(this.refs.icons).height();
    let hBignum = $(this.refs.bignum).height();
    let hCurrs = $(this.refs.currs).height();

    let hPanel = h - 270;

    let $this = this;

    $(window).resize(()=>{
      ld = $(this.refs.ld);

      h = ld.height();
      hIco = $(this.refs.icons).height();
      hBignum = $(this.refs.bignum).height();
      hCurrs = $(this.refs.currs).height();

      hPanel = h - 270;
    });

    $(this.refs.ld).scroll(()=>{

      if(!this.state.holder){
        this.setState({ holder : true });
        let realScroll = ld.scrollTop();
        if(this.state.scroll == 1 && realScroll > this.state.scroller){
          this.scrollingTo(hPanel, 2);
          this.props.signals.tools.infoPanel({action:'show'});
        }else if(this.state.scroll == 2 && realScroll < this.state.scroller){
          this.scrollingTo(0, 1);
          this.props.signals.tools.infoPanel({action:'hide'});
        }
        else if(this.state.scroll == 2 && realScroll > this.state.scroller){
          this.scrollingTo(h, 3);
          this.props.signals.tools.infoPanel({action:'hide'});
        }else if(this.state.scroll == 3 && realScroll < this.state.scroller){
          this.scrollingTo(hPanel,2);
          this.props.signals.tools.infoPanel({action:'show'});
        }
        else{
          this.setState({ holder : false });
        }
      }


    });
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
  render() {
    return (
      <div className={"ld2" + (!this.state.holder?" scroll":"")} ref="ld2">
        <div className={"ld" + (this.state.holder?" noscroll":"")} ref="ld">
          <div className="block background">
            <video id="video_background"  loop="loop" autoPlay="autoPlay" preload="auto" onended="this.play()">
              <source type="video/mp4" src="/bg.mp4"></source>
            </video>
            <div className="videogrid"></div>
          </div>
          <div className="block opacity">
            <div className="promo">
              <h1>Bit.Exchange - is the internet of digital currencies</h1>

              { !this.props.user._id ? <div>
                <a className="ui massive teal button">create account</a>

                <button className="ui normal big positive button hidden">Sign in with Coinbase</button>
              </div> : null }
              <a className="ui massive icon button scrolldown" onClick={this.scrollAll.bind(this)}>
                <i className="down arrow icon" />
              </a>
            </div>
          </div>
          <div className="block white" ref="icons">
            <div className="ui main container">
              <div className={"ui grid icons " + (!this.state.icons?"invisible":"")}>
                <div className="three column row">
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge fa fa-tint icon" />
                        Liquidity
                      </h2>
                      Fast funding. Low fees
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge fa fa-clock-o icon" />
                        Reliability
                      </h2>
                      24/7 Support/ Legally compliant
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge fa fa-user-secret icon" />
                        Security
                      </h2>
                      Strong security. Encrypted cold storage
                    </div>
                  </div>
                </div>
                <div className="three column row">
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge fa fa-university icon" />
                        Bitcoin Marging Trading
                      </h2>
                      Leveraged trading up to 5x. Shorting allowed
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge li_params icon" />
                        Advanced order types
                      </h2>
                      Stop-loss orders. Automate your strategy
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        <i className="ui huge fa fa-area-chart icon" />
                        Proof of reserves Audits
                      </h2>
                      Cryptographically verified/ Created the industry standard
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block white opacity" ref="bignum">
            <div className="ui main container">
              <div className="ui grid bignumber">
                <div className="three column row">
                  <div className="column">
                    <div className="ui basic segment">
                      <h1 className="ui icon header">
                        $2.5B
                      </h1>
                      In bitcoin traded
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h1 className="ui icon header">
                        32
                      </h1>
                      Countries supported
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h1 className="ui icon header">
                        2.7M
                      </h1>
                      Customers served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block white" ref="currs">
            <div className="ui main container">
              <div className="ui grid currs">
                <div className="four column row">
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        XBT / EUR
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      234.747773
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        XBT / USD
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      42.783489
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        BTC / USD
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      231.453545
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        BTC / CNY
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      72373.3773
                    </div>
                  </div>
                </div>
                <div className="four column row">
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        BTC / ANC
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      4535.45345
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        BTC / GLD
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      35345.43434
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        ANC / USD
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down icon"></i>
                      </div>
                      0.231232
                    </div>
                  </div>
                  <div className="column">
                    <div className="ui basic segment">
                      <h2 className="ui icon header">
                        ANC / CNY
                      </h2>
                      <div className="ui horizontal divider">
                        <i className="fa fa-arrow-circle-down"></i>
                      </div>
                      3.4535543
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="block teal footer">
            <div className="ui main container">
              <p className="center aligned">Copyright 2015 Sickoffice</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

});
export default Home;
