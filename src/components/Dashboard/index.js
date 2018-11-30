import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const Container = styled.div`
  background: #fff;
  flex: 1;
  padding: 5em 0;
  text-align: center;
`;

const FrameContainer = styled.div`
  display: flex;
  margin-top: 3em;
`;

const Frame = styled.div`
  flex: 1;
`;

const FullFrame = styled.div`
  flex: 100%;
`;

export default () => {
  return (
    <Container>
      <Header />
      <FrameContainer>
        <Frame>
          <iframe
            src="https://boostlabs-partner.domo.com/embed/card/330729796?enable=title,summary,drill,filter,picker"
            title="domo-chart-1"
            width="600"
            height="600"
            marginHeight="0"
            marginWidth="0"
            frameBorder="0"
            scrolling="no"
          />
        </Frame>
        <Frame>
          <iframe
            src="https://boostlabs-partner.domo.com/embed/card/625333828?enable=title,summary,drill,filter,picker"
            title="domo-chart-2"
            width="600"
            height="600"
            marginHeight="0"
            marginWidth="0"
            frameBorder="0"
            scrolling="no"
          />
        </Frame>
      </FrameContainer>
      <FrameContainer>
        <FullFrame>
          <iframe
            src="https://boostlabs-partner.domo.com/embed/card/1997625531?enable=title,summary,drill,filter,picker"
            title="domo-chart-3"
            width="1000"
            height="600"
            marginHeight="0"
            marginWidth="0"
            frameBorder="0"
            scrolling="no"
          />
        </FullFrame>
      </FrameContainer>
    </Container>
  );
};
