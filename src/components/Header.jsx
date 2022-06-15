import React from 'react';
import './Header.css';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {SiWebmoney} from 'react-icons/si';
import LOGO from '../images/BlockPulse.png';

const Header = () => {
  return (
    <header className='container'>
      <h1 className='header'><img src={LOGO} alt="logo"/></h1>
        <div className='social_links'>
          <a href='https://brodyamcfarland.github.io/BrodyMcFarland/' target={'_blank'}><SiWebmoney/></a>
          <a href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/" target="_blank" id="Linkedinbtn"><BsLinkedin /></a>
          <a href="https://github.com/brodyamcfarland" target="_blank" id="Githubbtn"><FaGithub /></a>
          <a href="https://twitter.com/off2eth" target="_blank" id="Twitterbtn"><FiTwitter/></a>
        </div>      
      <h3 className='subheader'>Digital Asset analysis tool that pulls in Macro Legacy Indicators to provide an quick way to analyze sentiment and previous historical price metrics.</h3>
    </header>
  )
};

export default Header;