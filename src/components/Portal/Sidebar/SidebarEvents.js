import React from 'react';
import Button from 'components/common/Button';

const createIconRows = (data) => {
  return data.map((obj, index) => (
    <div key={index} className={`${obj.alert ? 'event-container' : 'event-container'}`}>
      <i className={`${obj.icon}`}></i>
      <div className="header-container">
        {obj.header && <span className="header">{obj.header}</span>}
        {obj.secondaryHeader && <span className="secondary-header">{obj.secondaryHeader}</span>}
      </div>
    </div>
  ));
};

const SidebarEvents = ({ data, title }) => {
  return (
    <div className="sidebar-events">
      <div className="title-container">
        <span className="title">{title}</span>
        <Button text="view all"/>
      </div>
      {createIconRows(data)}
    </div>
  );
}

export default SidebarEvents;