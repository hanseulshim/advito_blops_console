import styled from 'styled-components'
import Button from 'components/common/Button'
import TextInput from 'components/common/TextInput'
import Select from 'react-select'

export const FormContainer = styled.div`
  display: flex;
  height: 30em;
  justify-content: flex-start;
`

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-right: auto;
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex: 1;
  /* margin-bottom:2em; */
`

export const FormLabel = styled.span`
  text-transform: uppercase;
  margin-bottom: 5px;
`

export const FormText = styled(TextInput)`
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
`

export const Dropdown = styled(Select)`
  width: 100%;
`

export const Password = styled(TextInput)`
  border: none;
  width: 50%;
  display: inline-block;
`

export const Save = styled(Button)`
  position: relative;
  left: 40%;
  margin-top: 5em;
`

export const Settings = styled(Button)`
  border: none;
`

export const ChangePassword = styled(Button)`
  display: inline-block;
  flex-grow: 0;
`

export const Notes = styled.textarea`
  height: 10em;
  padding: 0.5em;
  width: 100%;
  box-sizing: border-box;
  background: transparent;
  border: 1px solid #dedede;
  font-size: 1em;
`
