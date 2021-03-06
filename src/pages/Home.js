import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";
import { Logo } from '../images/Netflix';
import { ConnectButton, Icon, TabList, Tab } from 'web3uikit';

const Home = () => {

  return (
    <>
      <div className="logo">
        <Logo />
      </div>
      <div className="connect">
        <Icon fill="#ffffff" size={24} svg="bell" />
        <ConnectButton />
      </div>
      <div className="topBanner">
        <TabList defaultActiveKey={1} tabStyle="bar">
          <Tab tabKey={1} tabName={"Movies"}></Tab>
          <Tab tabKey={2} tabName={"Series"} isDisabled={true}></Tab>
          <Tab tabKey={3} tabName={"MyList"}></Tab>
        </TabList>
      </div>
    </>
  )
}

export default Home;
