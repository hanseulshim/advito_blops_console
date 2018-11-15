import React from 'react';
import WalrusImage from 'assets/walrus.jpeg';
import Shayan from 'assets/shayan.jpeg';

const SidebarUserInfo = () => {
  return (
    <div className="sidebar-user-info">
      <img src={Shayan} alt="avatar"/>
      <div>
        <span>Shayan Kheradmand</span>
        <i className="icon fas fa-cog"></i>
      </div>
    </div>
  );
}

export default SidebarUserInfo;