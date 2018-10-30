import React from 'react';
import WalrusImage from '../../assets/walrus.jpeg';

const SidebarUserInfo = () => {
  return (
    <div className="sidebar-user-info">
      <img src={WalrusImage} alt="avatar"/>
      <div>
        <span>Hingle McCringleberry</span>
      </div>
    </div>
  );
}

export default SidebarUserInfo;