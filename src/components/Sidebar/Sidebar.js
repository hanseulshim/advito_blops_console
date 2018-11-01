import React from 'react';
import './Sidebar.scss';
import SidebarEvents from './SidebarEvents';
import SidebarUserInfo from './SidebarUserInfo';

//TODO: eventually delete
import { activeAlerts, upcomingActions } from 'data/sidebar';

const SideBar = () => {
  return (
    <div className="sidebar-container">
      <SidebarUserInfo />
      <SidebarEvents title="upcoming actions" data={upcomingActions}/>
      <SidebarEvents title="active alerts" data={activeAlerts}/>
    </div>
  );
}

export default SideBar;
