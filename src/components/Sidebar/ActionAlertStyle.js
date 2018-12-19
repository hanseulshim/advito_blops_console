import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 3em;
`;

export const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

export const EventContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const EventIcon = styled.div`
  padding: 0.5em;
  margin: 0.5em 1em 0.5em 0;
  flex: 1;
  border: ${props => props.round && `1px solid ${props.theme.tradewind}`};
  border-radius: 50%;
  img {
    width: 100%;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 7;
`;

export const Header = styled.span`
  margin-top: 0.5em;
`;
