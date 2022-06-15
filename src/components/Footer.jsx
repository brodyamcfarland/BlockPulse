import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiTwitter} from 'react-icons/fi';
import {SiWebmoney} from 'react-icons/si';
import './Footer.css';

const Footer = () => {
  return (
    <div className='container_footer'>
      <div className='social_links'>
        <a href='https://brodyamcfarland.github.io/BrodyMcFarland/' target='_blank'><SiWebmoney/></a>
        <a href="https://www.linkedin.com/in/brody-mcfarland-93a91b106/" target="_blank" id="Linkedinbtn"><BsLinkedin /></a>
        <a href="https://github.com/brodyamcfarland" target="_blank" id="Githubbtn"><FaGithub /></a>
        <a href="https://twitter.com/off2eth" target="_blank" id="Twitterbtn"><FiTwitter/></a>
      </div>
      <div className="footer__copyright">
        <small className='copywright_tag'>&copy; Brody McFarland 2022. All rights reserved.</small>
      </div>
    </div>
  )
};

export default Footer;