import React from 'react';
import { useState, useEffect } from 'react';
import './DominanceWatcher.css';
import BTC from '../../../node_modules/cryptocurrency-icons/32/color/btc.png';
import ETH from '../../../node_modules/cryptocurrency-icons/32/color/eth.png';
import ADA from '../../../node_modules/cryptocurrency-icons/32/color/ada.png';
import BNB from '../../../node_modules/cryptocurrency-icons/32/color/bnb.png';
import USDC from '../../../node_modules/cryptocurrency-icons/32/color/usdc.png';

const DominanceWatcher = () => {
  const [dominance, setDominance] = useState({});
  const [loading, setLoading] = useState(true);


  function loadDominance() {
    fetch('https://api.coingecko.com/api/v3/global')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setDominance(data);
        setLoading(false);
        console.log("Loading big txn Data..." + data);
      })
  }

  useEffect(() => {
    loadDominance()
  },[]);
  
  if (loading) return <h1> LOADING... </h1>;

  return (
    <div className='dominance_wrapper'>
      <header>Dominance Metrics</header>
      <article>Dominance allows you to visualize how much of the total marketcap each asset makes up. When BTC dominance is in an uptrend, we are in a Risk-off environment. When BTC dominance is in a downtrend, we are Risk-on.</article>
      <div className='dominance_main'>
        <div className="active_crypto"># of Active Crypto Assets: {dominance.data.active_cryptocurrencies}</div>
        <div className="btc_dom"><img className='crpytosym' src={BTC} alt="BTC"/>BTC Dominance: {Math.round(dominance.data.market_cap_percentage.btc)}% <br/> 2022 Projection: 50-55%</div>
        <div className="eth_dom"><img className='crpytosym'src={ETH} alt="ETH"/>ETH Dominance: {Math.round(dominance.data.market_cap_percentage.eth)}% <br/> 2022 Projection: 12-14%</div>
        <div className='bnb_dom'><img className='crpytosym'src={BNB} alt="BNB"/>BNB Dominance: {Math.round(dominance.data.market_cap_percentage.bnb)}% <br/> 2022 Projection: 3-3.5%</div>
        <div className='ada_dom'><img className='crpytosym'src={ADA} alt="ADA"/>ADA Dominance: {Math.round(dominance.data.market_cap_percentage.ada)}% <br/> 2022 Projection: 1-1.5%</div>
        <div className='usdc_dom'><img className='crpytosym'src={USDC} alt="USDC"/>USDC Dominance: {Math.round(dominance.data.market_cap_percentage.usdc)}% <br/> 2022 Projection: 4-4.5%</div>        
      </div>
    </div>
  )
};

export default DominanceWatcher;