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
  border-top: ${props => !props.first && `1px solid ${props.theme.silver}`};
  padding: 1em 0;
  flex: 1;
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
`;
