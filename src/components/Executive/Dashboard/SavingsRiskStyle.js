import styled from 'styled-components';
import Icon from 'components/common/Icon';

export const Container = styled.div`
  flex: 1;
  padding-left: 2em;
  margin-top: ${props => props.theme.verticalSpace};
`;

export const TitleContainer = styled.div`
  margin: 1.5em 0;
  display: flex;
  align-items: center;
`;

export const RowContainer = styled.div`
  display: flex;
  cursor: pointer;
  align-items: center;
  margin-right: 40px;
  border-top: ${props => !props.first && `1px solid ${props.theme.silver}`};
`;

export const Rank = styled.div`
  color: ${props => props.theme.easternWind};
  border: 2px solid ${props => props.theme.easternWind};
  border-radius: 100%;
  padding: 0.35em;
  margin-right: 0.5em;
  font-size: 1.15em;
  font-weight: 400;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  padding: 1em 0;
  flex: 1.5;
`;

export const RowTitle = styled.div`
  margin-bottom: 0.5em;
  height: 2em;
  display: flex;
  align-items: center;
`;

export const RightIcon = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  font-size: 2em;
  margin-right: 10%;
`;

export const Metric = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
`;

export const Unit = styled.span`
  font-size: 0.75em;
  line-height: 0.75em;
  font-weight: 400;
  color: ${props => props.theme.black};
`;

export const Title = styled.span`
  font-size: 0.8em;
  line-height: 0.8em;
  text-transform: uppercase;
  color: ${props => props.theme.black};
`;
