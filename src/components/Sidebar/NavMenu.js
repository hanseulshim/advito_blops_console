import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router';
import { withApollo } from 'react-apollo';
import { compose } from 'react-apollo';
import { Link } from 'react-router-dom';
import { LOGOUT } from 'components/graphql/query';
import Icon from 'components/common/Icon';
import { withUserContext } from 'components/context';
import Popover from '@material-ui/core/Popover';
import { withStyles } from '@material-ui/core/styles';

const NavItem = styled(Link)`
  color: ${props => props.theme.white};
  margin-bottom: 1em;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.white};
    text-decoration: underline;
  }
`;

const LogOut = styled.span`
  color: ${props => props.theme.white};
  margin-bottom: 1em;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.white};
    text-decoration: underline;
  }
`;
const MenuIcon = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  font-size: 1.5em;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.jungleMist};
  }
`;

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FF9E16',
    padding: '1em 2em',
  },
});

const NavItems = [
  {
    link: '/user-profile',
    title: 'User Profile',
  },
  {
    link: '/client-setup',
    title: 'Clients',
  },
  {
    link: '/user-access',
    title: 'Advito Users',
  },
];

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
    };
  }

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget,
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null,
    });
  };

  render() {
    const {
      client,
      location,
      classes,
      context: { removeUser },
    } = this.props;
    const { anchorEl } = this.state;

    const open = Boolean(anchorEl);

    return (
      <>
        <MenuIcon
          className="fas fa-cog"
          onClick={this.handleClick}
          aria-owns={open ? 'nav-menu' : undefined}
          aria-haspopup="true"
        />
        <Popover
          id="nav-menu"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <div className={classes.container}>
            {NavItems.map((nav, index) => (
              <NavItem key={index} to={nav.link} replace={location.pathname.includes(nav.link)}>
                {nav.title}
              </NavItem>
            ))}
            <LogOut
              onClick={async event => {
                event.preventDefault();
                removeUser();
                await client.query({
                  query: LOGOUT,
                });
              }}
            >
              Logout
            </LogOut>
          </div>
        </Popover>
      </>
    );
  }
}
export default compose(
  withRouter,
  withApollo,
  withUserContext,
  withStyles(styles)
)(NavMenu);
