import React from 'react';
import styled from 'styled-components';
import Icon from 'components/common/Icon';
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
  margin-bottom: 20%;
  position: relative;
`;

const Image = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    border-radius: 50%;
    width: 30%;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75em;
`;

const CogIcon = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  font-size: 1.5em;
  position: absolute;
  right: 32.5%;
  bottom: 25%;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.jungleMist};
  }
`;

class SideBarUserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  render() {
    const { menuOpen } = this.state;
    return (
      <UserContext.Consumer>
        {({ user }) => (
          <Container>
            <TitleContainer>
              <Link to="/user-profile" replace>
                <Image>
                  <img src={Shayan} alt="avatar" />
                </Image>
              </Link>
              <CogIcon className="fas fa-cog" onClick={this.toggleMenu} />
            </TitleContainer>
            <Title>{user.displayName}</Title>
            {menuOpen && <NavMenu />}
          </Container>
        )}
      </UserContext.Consumer>
    );
  }
}

export default SideBarUserInfo;
