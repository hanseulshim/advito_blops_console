import styled from 'styled-components';

export const Container = styled.div`
  margin-top: ${props => props.theme.verticalSpace};
`;

export const TitleContainer = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EventIcon = styled.div`
  margin: 0.5em 0.5em 0.5em 0;
  flex: 0.5;
  img {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`;

export const Header = styled.span`
  margin-top: 0.5em;
`;
