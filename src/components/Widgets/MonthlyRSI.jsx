import React from 'react';
import './MonthlyRSI.css';
import { useState, useEffect } from 'react';

const MonthlyRSI = () => {
  const [RSI, setRSI] = useState({});
  const [loading, setLoading] = useState(true);
  // APIKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjJhN2E2YjM2YzI4YjU1Y2Q1OGU5Y2U1IiwiaWF0IjoxNjU1MTU0MzU1LCJleHAiOjMzMTU5NjE4MzU1fQ.8cyFsEtAANKy4k46ydh020ShoImvHqw4G0Rkzf1KEm0";
  // taapi can only go to the weekly RSI, so I guess I will have to guestimate
  function loadRSI() {
    fetch('https://api.taapi.io/rsi?secret=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHVlIjoiNjJhN2E2YjM2YzI4YjU1Y2Q1OGU5Y2U1IiwiaWF0IjoxNjU1MTU0MzU1LCJleHAiOjMzMTU5NjE4MzU1fQ.8cyFsEtAANKy4k46ydh020ShoImvHqw4G0Rkzf1KEm0&exchange=binance&symbol=BTC/USDT&interval=1w&period=250')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRSI(data);
        setLoading(false);
        console.log("RSI Loading..." + data);
      })
  }

  useEffect(() => {
    loadRSI()
  },[]);
  // This is a completely fake calculation
  let estimatedRSI = Math.round(RSI.value) - 8.9;

  if (loading) return <h1> LOADING... </h1>;

  return (
    <div className='RSIcontainer'>
      <div className='todaysRSI'>
        <h3>BTC Monthly RSI</h3>
        <div className='explanation'>The monthly relative strength index value is a scale from 1-100. Over 80 is overbought. Under 55 is oversold. Increase buying frequency when values get towards historical lows. </div>
        <div className='todayMRSI'>
          <span>Today's Monthly RSI:</span><span className='apiTodayRSI'>{estimatedRSI}</span>
        </div>
      </div>
      <div className='historicalRSI'>
        <h4>Historical RSI Lows</h4>
        <div className='histlist'>
          <div><span className='yellownumbas'>45.05</span>- 1/2015</div>
          <div><span className='yellownumbas'>44.45</span>- 1/2019</div>
          <div><span className='yellownumbas'>43.27</span>- 6/2022</div>
        </div>
      </div>
    </div>
  )
};

export default MonthlyRSI;