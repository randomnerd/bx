import React from 'react';

export default React.createClass({
  getInitialState() {
    return {
      panel: false,
      icons: false
    };
  },
  componentDidMount() {

    Dispatcher.register((e) => {
      //console.log('new dispatcher event', payload);
      switch (e.actionType) {

        case 'SHOW_PANEL':
          break;

        case 'HIDE_PANEL':
          //$(this.refs.ld).removeClass('pressed');
          //this.setState({ panel : false });
          break;
      }
    });
    this.setState({ icons : false });
    let h = $(this.refs.ld).height() - 270;
    let ld=$(this.refs.ld);
    $(this.refs.ld).scroll(()=>{
      let lds=ld.scrollTop();
      if( lds >= 10 && lds < h && !this.state.icons){
        //this.setState({ icons : true });
        this.scrollAll();
      }
      if( lds <= 10 || lds > h*2 ){
        this.setState({ icons : false });
      }
      if((lds < h*1.5)  && (lds >= 10) && !this.state.panel){

        Dispatcher.dispatch({actionType: 'SHOW_PANEL'});
        this.setState({ panel : true });
        $(this.refs.ld).addClass('pressed');

      }
      if((lds > h*1.5 || lds <= 10) && this.state.panel){

        Dispatcher.dispatch({actionType: 'HIDE_PANEL'});
        this.setState({ panel : false });
        $(this.refs.ld).removeClass('pressed');

      }
    });
  },
  scrollOut(){
    $(this.refs.ld).animate({scrollTop:0});
  },
  scrollAll(){
    //$('#video_background').hide();
    let h = $(this.refs.ld).height() - 270;
    $(this.refs.ld).animate(
      {scrollTop:h+35},0.5,0,()=>{
        this.setState({ icons : true });
        //$('#video_background').show();
      }
    );

  },
  render() {
    return (
      <div className="ld" ref="ld">
        <div className="block background">
          <video id="video_background"  loop="loop" autoPlay="autoPlay" preload="auto" onended="this.play()">
            <source type="video/mp4" src="/bg.mp4"></source>
          </video>
          <div className="videogrid"></div>
        </div>
        <div className="block opacity">
          <div className="promo">
            <h1>Bit.Exchange - is the internet of digital currencies</h1>

            <div>
              <a className="ui  massive teal button">create account</a>

              <button className="ui normal big positive button hidden">Sign in with Coinbase</button>
            </div>
            <a className="ui massive icon button scrolldown" onClick={this.scrollAll}>
              <i className="down arrow icon" />
            </a>
          </div>
        </div>
        <div className="block white">
          <div className="ui main container">
            <div className="ui grid icons">
              <div className="three column row">
                <div className="column">
                  <div className="ui basic segment">
                    <h2 className="ui icon header">
                      <i className={"ui huge fa fa-tint icon " + (!this.state.icons?"invisible":"")} />
                      Liquidity
                    </h2>
                    Fast funding. Low fees
                  </div>
                </div>
                <div className="column">
                  <div className="ui basic segment">
                    <h2 className="ui icon header">
                      <i className={"ui huge fa fa-clock-o icon " + (!this.state.icons?"invisible":"")} />
                      Reliability
                    </h2>
                    24/7 Support/ Legally compliant
                  </div>
                </div>
                <div className="column">
                  <div className="ui basic segment">
                    <h2 className="ui icon header">
                      <i className={"ui huge fa fa-user-secret icon " + (!this.state.icons?"invisible":"")} />
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
                      <i className={"ui huge fa fa-university icon " + (!this.state.icons?"invisible":"")} />
                      Bitcoin Marging Trading
                    </h2>
                    Leveraged trading up to 5x. Shorting allowed
                  </div>
                </div>
                <div className="column">
                  <div className="ui basic segment">
                    <h2 className="ui icon header">
                      <i className={"ui huge li_params icon " + (!this.state.icons?"invisible":"")} />
                      Advanced order types
                    </h2>
                    Stop-loss orders. Automate your strategy
                  </div>
                </div>
                <div className="column">
                  <div className="ui basic segment">
                    <h2 className="ui icon header">
                      <i className={"ui huge fa fa-area-chart icon " + (!this.state.icons?"invisible":"")} />
                      Proof of reserves Audits
                    </h2>
                    Cryptographically verified/ Created the industry standard
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block white opacity">
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
        <div className="block white">
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
    );
  }
});
