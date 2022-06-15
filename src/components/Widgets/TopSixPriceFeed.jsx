import React, { useEffect, useState } from 'react';
import BTC from '../../../node_modules/cryptocurrency-icons/32/color/btc.png';
import ETH from '../../../node_modules/cryptocurrency-icons/32/color/eth.png';
import ADA from '../../../node_modules/cryptocurrency-icons/32/color/ada.png';
import LINK from '../../../node_modules/cryptocurrency-icons/32/color/link.png';
import MANA from '../../../node_modules/cryptocurrency-icons/32/color/mana.png';
import NTVRK from '../../images/NETVRK.png';
import './TopSixPriceFeed.css';


const TopSixPriceFeed = () => {

  const [topSix, setTopSix] = useState({});
  const [loading, setLoading] = useState(true);

  function loadTopSix() {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,chainlink,cardano,decentraland,netvrk&vs_currencies=USD,USD,USD,USD,USD,USD&include_market_cap=false&include_24hr_vol=true&include_24hr_change=true')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTopSix(data);
        setLoading(false);
        console.log("Top 6 Coins Loaded to State." + data);
      })
  }

  useEffect(() => {
    loadTopSix()
  },[]);
  

  if (loading) return <h1> LOADING... </h1>;

  return (
    <>
      <div className='topsixContainer'>
        <div className='BTC_Container'>
          <img src={BTC} alt="BTC"/>
          <div>
            <span>BTC = {topSix.bitcoin.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.bitcoin.usd_24h_change)} %</span>
          </div>
        </div><br/>
        <div className='ETH_Container'>
          <img src={ETH} alt="ETH"/>
          <div>
            <span>ETH = {topSix.ethereum.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.ethereum.usd_24h_change)} %</span>
          </div>
        </div><br/>
        <div className='ADA_Container'>
          <img src={ADA} alt="ADA"/>
          <div>
            <span>ADA = {topSix.cardano.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.cardano.usd_24h_change)} %</span>
          </div>
        </div><br/>
        <div className='LINK_Container'>
          <img src={LINK} alt="LINK"/>
          <div>
            <span>LINK = {topSix.chainlink.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.chainlink.usd_24h_change)} %</span>
          </div>
        </div><br/>
        <div className='MANA_Container'>
          <img src={MANA} alt="MANA"/>
          <div>
            <span>MANA = {topSix.decentraland.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.decentraland.usd_24h_change)} %</span>
          </div>
        </div><br/>
        <div className='NTVRK_Container'>
          <img src={NTVRK} alt="NTVRK"/>
          <div>
            <span>NTVRK = {topSix.netvrk.usd}</span><br/><span>Daily Gain/Loss = {Math.round(topSix.netvrk.usd_24h_change)} %</span>
          </div>
        </div><br/>
      </div>
    </>
  )
}

export default TopSixPriceFeed;