import styled from 'styled-components';
import Icon from 'components/common/Icon';
import Button from 'components/common/Button';
import TextInput from 'components/common/TextInput';

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
`;

export const Close = styled(Icon)`
  color: ${props => props.theme.treePoppy};
  border: 1px solid;
  border-radius: 100%;
  padding: 0.5em;
  width: 5px;
  height: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-right: auto;
`;

export const ModalFormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  margin-bottom: 2em;
`;

export const ModalFormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`;

export const ModalFormText = styled(TextInput)`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
`;

export const ModalText = styled.div`
  white-space: pre-line;
  font-style: italic;
`;

export const ModalSubText = styled(ModalText)`
  margin-top: 1em;
  margin-left: 2em;
`;

export const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`;

export const Notes = styled.textarea`
height:10em;
padding: 0.5em;
width: 100%;
box-sizing: border-box;
background: transparent;
border: 1px solid #dedede;
font-size:1em;`