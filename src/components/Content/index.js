import React from 'react';
import './Content.scss';
import Header from './Header';
import ContentMain from './ContentMain';

import { viewData, infoData } from 'data/viewData';

const Content = () => {
  return (
    <div className="content-container">
      <Header />
      <ContentMain viewData={viewData} infoData={infoData} />
    </div>
  );
}

export default Content;
