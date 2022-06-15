import React from 'react';
import './IndicatorLinks.css';

const IndicatorLinks = () => {
  return (
    <>
      <div className='links_container'>
        <div className='links_explained'>
          <header>Link Tree for Top Indicators</header>
          <article>Some metrics are non-replicable through API's and Math, so here is some links to deepen your aresenal of indicators.</article>
        </div>
        <div className='link_tree'>
          <a href="https://www.lookintobitcoin.com/charts/pi-cycle-top-indicator/" target="_blank">Pi Cycle Top Indicator</a><br/><br/><br/>
          <a href="https://www.blockchaincenter.net/en/bitcoin-rainbow-chart/" target="_blank">BTC Rainbow Chart</a><br/><br/><br/>
          <a href="https://stats.buybitcoinworldwide.com/monthly-rsi/" target="_blank">BTC Monthly RSI</a><br/><br/><br/>
          <a href="https://alternative.me/crypto/fear-and-greed-index/" target="_blank">Fear and Greed Index</a><br/><br/><br/>
          <a href="https://coinmarketcap.com/" target="_blank">CoinMarketCap.com</a><br/><br/><br/>
          <a href="https://www.coinglass.com/pro/i/200WMA" target="_blank">200 Week Moving Average Heatmap</a><br/><br/><br/>
          <div></div>
        </div>
      </div>
    </>
  )
};

export default IndicatorLinks;