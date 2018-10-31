import React from 'react';
import WalrusImage from 'assets/walrus.jpeg';

const SidebarUserInfo = () => {
  return (
    <div className="sidebar-user-info">
      <img src={WalrusImage} alt="avatar"/>
      <div>
        <span>Hingle McCringleberry</span>
        <i className="icon fas fa-cog"></i>
      </div>
    </div>
  );
}

export default SidebarUserInfo;