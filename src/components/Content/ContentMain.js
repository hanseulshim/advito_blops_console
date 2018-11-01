import React from 'react';
import Button from 'components/common/Button';

const generateViews = (data) => data.map((view, index) => (
  <div className="view" key={index}>
    <div className="view-icon-container">
      <i className={view.icon} />
      <span className="view-title">{view.title}</span>
    </div>
    <div className="list-container">
      {generateList(view.list)}
    </div>
  </div>
));

const generateList = (list) => list.map((view, index) => (
  <div className="list" key={index}>
    <i className={view.icon} />
    <span>{view.title}</span>
  </div>
));

const generateInfoViews = (data) => data.map((view, index) => (
  <div className="info" key={index}>
    <i className={view.icon} />
    <div className="info-text">
      <span className="title">{view.title}</span>
      <Button text={view.button} />
    </div>
  </div>
));

const ContentMain = ({ infoData, viewData }) => {
  return (
    <div className="content-main-container">
      <div className="program-performance-container">
        <div className="program-performance">
          <i className="fab fa-envira icon"></i>
          <span>Program Performance</span>
        </div>
        <div className="program-performance-info">
          Total program Performance is 7.1 out of 8.7 with no change since July 30, 2018
        </div>
      </div>
      <div className="view-container">
        {generateViews(viewData)}
      </div>
      <div className="info-container">
        {generateInfoViews(infoData)}
      </div>
    </div>
  );
}

export default ContentMain;