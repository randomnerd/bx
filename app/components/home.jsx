import React from 'react';

export default React.createClass({
  render() {
    return (
      <div className="ld">
        <div className="block background">
          <video id="video_background"  loop="loop" autoPlay="autoPlay" preload="auto" onended="this.play()">
            <source type="video/mp4" src="/bg.mp4"></source>
          </video>
        </div>
        <div className="block opacity">
          <div className="promo">
            <h1>Bitcoin Trading You Can Trust</h1>
            <p>Bit.Exchange is the leading platform to trade bitcoin.</p>

            <div>
              <a className="ui normal big teal button">create account</a>

              <a href="/pair/btc" className="ui white big button">View Demo</a>

              <button className="ui normal big positive button hidden">Sign in with Coinbase</button>
            </div>
          </div>
        </div>
        <div className="block white">
          dfsgdfg
        </div>
        <div className="block ">
          dfsgdfg
        </div>
        <div className="block white">
          dfsgdfg
        </div>
      </div>
    );
  }
});
