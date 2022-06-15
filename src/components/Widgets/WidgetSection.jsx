import React from 'react';
import Trending from './Trending';
import FearAndGreed from './FearAndGreed';
import MonthlyRSI from './MonthlyRSI';
import DominanceWatcher from './DominanceWatcher';
import IndicatorLinks from './IndicatorLinks';
import TopSixPriceFeed from './TopSixPriceFeed';
import './WidgetSection.css';

const WidgetSection = () => {
  return (
    <>
      <div className='widget_grid'>
        <FearAndGreed />
        <TopSixPriceFeed />
        <MonthlyRSI />
        <DominanceWatcher />
        <Trending />
        <IndicatorLinks />
      </div>
    </>
  )
}

export default WidgetSection;