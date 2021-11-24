import React from 'react';
import './Home.css';
import desktopBanner from '../../assets/desktop.jpg';
import Job from '../Job/Job';
import DropdownRender from '../Dropdown/Dropdown';

const Home = () => {

  return (
    <div className="home">
      <div className="nav">Nav</div>
      <div className="bannerWrap">
        <img className="banner" src={desktopBanner} alt="banner" />
        <div className="descriptionBox">
          <div className="bannerTitle">工作版</div>
          <div className="bannerDescription">為你集合每天網上所有最新工作。<br />讓你在Freehunter就能輕鬆捕捉每個工作機會。</div>
        </div>
      </div>
      <div className="filterPannel">
        <DropdownRender />
      </div>
      <div className="contentWrap">
        <div className="jobsBlock">
          <Job />
        </div>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default Home;
