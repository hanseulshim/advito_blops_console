import React from 'react';
import Shayan from 'assets/shayan.jpeg';

const SidebarUserInfo = () => {
  return (
    <div className="sidebar-user-info">
      <img src={Shayan} alt="avatar" />
      <div>
        <span>Shayan Kheradmand</span>
        <i className="icon fas fa-cog" />
      </div>
    </div>
  );
};

export default SidebarUserInfo;
