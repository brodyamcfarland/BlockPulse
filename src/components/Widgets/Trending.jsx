import React from 'react';
import { useState, useEffect } from 'react';
import './Trending.css';

const Trending = () => {
  const [trending, setTrending] = useState({});
  const [loading, setLoading] = useState(true);
  
  function loadTrending() {
    fetch('https://api.coingecko.com/api/v3/search/trending')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTrending(data);
        setLoading(false);
        console.log("Loading Top Trending Coins....." + data);
      })
  }

  useEffect(() => {
    loadTrending()
  },[]);

  if (loading) return <h1> LOADING... </h1>;

  return (
    <div className='trending_container'>
        <header>Top 7 Trending Assets</header>
        <article>Take a peek at whats popular today. Gems can be found here, but please do your due dilligence. More than 90% of these will be pump and dumps and hype.</article>
        <div className='trending_list'>
          <div className='rank_containers'>
            <span>1</span>
            <ul>{trending.coins[0].item.name}</ul>
            <ul>{trending.coins[0].item.symbol}</ul>
            <ul>Rank: {trending.coins[0].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>2</span>
            <ul>{trending.coins[1].item.name}</ul>
            <ul>{trending.coins[1].item.symbol}</ul>
            <ul>Rank: {trending.coins[1].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>3</span>
            <ul>{trending.coins[2].item.name}</ul>
            <ul>{trending.coins[2].item.symbol}</ul>
            <ul>Rank: {trending.coins[2].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>4</span>
            <ul>{trending.coins[3].item.name}</ul>
            <ul>{trending.coins[3].item.symbol}</ul>
            <ul>Rank: {trending.coins[3].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>5</span>
            <ul>{trending.coins[4].item.name}</ul>
            <ul>{trending.coins[4].item.symbol}</ul>
            <ul>Rank: {trending.coins[4].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>6</span>
            <ul>{trending.coins[5].item.name}</ul>
            <ul>{trending.coins[5].item.symbol}</ul>
            <ul>Rank: {trending.coins[5].item.market_cap_rank}</ul>
          </div>
          <div className='rank_containers'>
            <span>7</span>
            <ul>{trending.coins[6].item.name}</ul>
            <ul>{trending.coins[6].item.symbol}</ul>
            <ul>Rank: {trending.coins[6].item.market_cap_rank}</ul>
          </div>          
        </div>
    </div>
  )
};

export default Trending;