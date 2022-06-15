import React from 'react';
import { useEffect, useState } from 'react';
import './FearandGreedContext.css';

const FearandGreedContext = () => {
  function loadFear() {
    fetch('https://api.alternative.me/fng/')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data[0]);
        setFearGreed(json.data[0]);
        console.log("Fear and Greed Loaded.");
      })
  }

  const [FearGreed, setFearGreed] = useState([]);

  let timeleft = Math.round(FearGreed.time_until_update/60);

  useEffect(() => {
    loadFear()
  },[]);

  return (
    <>
      <div className='fearContainer'>
        <header>Fear & Greed Index</header>
        <article className='FearGreedExplainer'>
          Buy the Fear Sell the Greed. <br/> Pay attention to other indicators in tandem with this. Extreme Greed or Fear can persist for long periods of time. Generally, buys at Fear/Extreme Fear have been historically great buys and taking profit at Greed/Extreme Greed have yeilded great returns.
        </article>
        <div className='fearValues'>
          <span>Value (1-100):</span><span className='fearNumber'>{FearGreed.value}</span><br/>
          <span>Sentiment: </span><span className='fearNumberClass'>{FearGreed.value_classification}</span><br/>
          <span>Last Updated: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Today</span><br/>
        </div>
        <div className='timeUntilNext'>Time Until Next Update: {timeleft} Minutes</div><br/>
      </div>
    </>
  )
}

export default FearandGreedContext;