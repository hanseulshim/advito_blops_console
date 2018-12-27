import React from 'react';
import { withRouter } from 'react-router';
import TopHeader from './TopHeader';
import BreadCrumbs from './BreadCrumbs';

const Header = ({ location }) => (
  <>
    <TopHeader dashboard={location.pathname !== '/'} />
    {location.pathname !== '/' && <BreadCrumbs />}
  </>
);

export default withRouter(Header);
