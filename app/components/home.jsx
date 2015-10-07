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
            <h2>Bitcoin Trading You Can Trust</h2>
            <p>Coinbase Exchange is the leading platform to trade bitcoin.</p>

            <div>
              <a className="btn login-small signin_btn" target="_blank" data-href="signup_url" href="">create account</a>

              <a href="/trade" className="btn login-small signup_btn">View Demo</a>

              <button className="btn login-small mobile-login">Sign in with Coinbase</button>
            </div>
          </div>
        </div>
        <div className="block white">
          dfsgdfg
        </div>
      </div>
    );
  }
});
