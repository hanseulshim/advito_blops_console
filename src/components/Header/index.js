import React from 'react';
import { withRouter } from 'react-router';
import TopHeader from './TopHeader';
import BreadCrumbs from './BreadCrumbs';

const Header = ({ location }) => (
  <>
    <TopHeader />
    {location.pathname !== '/' && <BreadCrumbs />}
  </>
);

export default withRouter(Header);
