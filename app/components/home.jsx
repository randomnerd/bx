import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="ld">
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
              <a className="ui normal big teal button">create account</a>

              <a href="/pair/btc" className="ui white big button">View Demo</a>

              <button className="ui normal big positive button hidden">Sign in with Coinbase</button>
            </div>
          </div>
        </div>
        <div className="block white">
        <div className="ui main container">
          <div className="ui grid icons">
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
                    <i className="ui huge fa fa-rocket icon" />
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
        <div className="block white">
          <div className="ui main container">
            <p>We are passionate group of individuals aware of the shift that is
            occurring in information security and digital assets and we have come
            together to work towards an anti-fragile future where your data's privacy
            and security are no longer a luxury but instead a standard.</p>

            <p>Like most things in life, its started with the solution to a simple problem.</p>

            <p>To make digital money more developed, exchanges are crucial, and we want to
            provide reliable easy to use service for companies and individuals to exchange
            bitcoins. We aim to bring secure, decentralized technologies to the next billion
            users through amazingly simple yet feature rich applications focused on ease of use
            and ease of security. Our focus is to deliver software, services, and products with
            an amazing user experience, both visually and functionally, simplifying this advanced
            technology and delivering it to the masses while still retaining core principles of
            decentralization and privacy. We believe bitcoin is here to stay.</p>
          </div>
        </div>
        <div className="block white opacity">
          <div className="ui main container">
            <div className="ui grid">
              <div className="eight wide column">
                <div className="ui piled segment">
                  <p>Easy to use service for companies and individuals to exchange bitcoins.</p>
                  <p>All the things that gold does, Bitcoin kind of does better.</p>
                  <h2 className="ui header">- Bill Gates</h2>
                  <span className="whereis">quoted from: Fox Business</span>
                </div>
              </div>
              <div className="eight wide column">
                <div className="ui piled segment">
                  <p>Bitcoin is a remarkable cryptographic achievement and the ability
                  to create something that is not duplicable in the digital world
                  has enormous value.</p>
                  <h2 className="ui header">- Eric Schmidt</h2>
                  <span className="whois">Google Chairman (and former CEO)</span>
                  <span className="whereis">quoted from: NEWSBTC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block white footer">
          <div className="ui main container">
            <p className="center aligned">Copyright 2015 Sickoffice</p>
          </div>
        </div>
      </div>
    );
  }
});
