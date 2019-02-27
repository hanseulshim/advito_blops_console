import React from 'react';
import styled from 'styled-components';

import { Title } from 'components/common/Typography';
import { Link } from 'react-router-dom';
import UserContext from 'components/context/UserContext';
import Shayan from 'assets/shayan.jpeg';
import NavMenu from './NavMenu';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100px;
`;

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 5em;
    vertical-align: bottom;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 0.75em;
`;

class SideBarUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Container>
            <TitleContainer>
              <Avatar>
                <Link to="/user-profile" replace>
                  <img src={Shayan} alt="avatar" />
                </Link>
              </Avatar>

              <NavMenu />
            </TitleContainer>
            <Title>{user.displayName}</Title>
          </Container>
        )}
      </UserContext.Consumer>
    );
  }
}

export default SideBarUserInfo;
