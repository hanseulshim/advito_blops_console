import React, { Component } from 'react';
import './Sidebar.scss';
import SidebarUserInfo from './SidebarUserInfo';

class SideBar extends Component {
  state = {  }
  render() {
    return (
      <div className="sidebar-container">
        <SidebarUserInfo />
      </div>
    );
  }
}

export default SideBar;