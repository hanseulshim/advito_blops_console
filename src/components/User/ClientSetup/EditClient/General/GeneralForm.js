import React, { Component } from 'react'
import styled from 'styled-components'

import ClientLogo from 'assets/react_logo.png'
import Button from 'components/common/Button'
import Select from 'react-select'
import Modal from 'components/common/Modal'
import Toggle from 'react-toggle'

import { withApollo } from 'react-apollo'

//GraphQl Mutation
import { UPDATE_CLIENT } from 'components/graphql/query/client'
import { GET_CLIENTS } from 'components/graphql/query/client'

import {
  FormContainer,
  Form,
  FormItem,
  FormLabel,
  FormText,
  Save,
  Notes,
} from '../../../Styles/FormStyles'

const industries = [
  { label: 'Information Technology', value: 'Information Technology' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Software Development', value: 'Software Development' },
  { label: 'Education', value: 'Education' },
  { label: 'Public Service', value: 'Public Service' },
]
const currencies = [{ label: 'US Dollar', value: 'Dollar' }, { label: 'Euro', value: 'Euro' }]

const distanceUnits = [
  { label: 'Miles', value: 'Miles' },
  { label: 'Kilometers', value: 'Kilometers' },
]

const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    align-self: flex-start;
    width: 5em;
    border-radius: 50%;
    margin-right: 5%;
  }
`

class GeneralForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientName: '',
      clientNameFull: '',
      clientTag: '',
      gcn: '',
      lanyonClientCode: '',
      isActive: false,
      logoPath: '',
      industry: '',
      defaultCurrencyCode: '',
      defaultDistanceUnits: '',
      description: '',
      errorMessage: '',
      notifyUser: false,
    }
  }

  componentDidMount() {
    const { selectedClient } = this.props
    const state = {}
    Object.keys(selectedClient).forEach(key => {
      if (selectedClient[key]) {
        if (key === 'defaultCurrencyCode') {
          const value = currencies.filter(v => v.value === selectedClient[key])[0]
          state[key] = value
        } else if (key === 'defaultDistanceUnits') {
          const value = distanceUnits.filter(v => v.value === selectedClient[key])[0]
          state[key] = value
        } else if (key === 'industry') {
          const value = industries.filter(v => v.value === selectedClient[key])[0]
          state[key] = value
        } else {
          state[key] = selectedClient[key]
        }
      }
    })
    this.setState({
      ...state,
    })
  }

  handleSave = async () => {
    const payload = { ...this.state }
    delete payload.errorMessage
    delete payload.notifyUser

    const { client, user } = this.props
    payload.sessionToken = user.sessionToken
    payload.clientId = this.props.selectedClient.id

    payload.industry = payload.industry.value
    payload.defaultCurrencyCode = payload.defaultCurrencyCode.value
    payload.defaultDistanceUnits = payload.defaultDistanceUnits.value

    const { data } = await client.mutate({
      mutation: UPDATE_CLIENT,
      variables: { ...payload },
    })
    if (data.updateClient.statusCode !== 200) {
      this.setState({
        errorMessage: data.updateClient.body.apimessage,
      })
      this.toggleModal()
    } else {
      this.setState({
        errorMessage: '',
      })
      client.query({
        query: GET_CLIENTS,
        variables: { sessionToken: user.sessionToken },
        fetchPolicy: 'network-only',
      })
      this.toggleModal()
    }
  }

  changeInput = (e, name) => {
    if (e.label) {
      this.setState({ [name]: e })
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      })
    }
  }

  toggleModal = () => {
    this.setState({
      notifyUser: !this.state.notifyUser,
    })
  }

  toggleActive = () => this.setState({ isActive: !this.state.isActive })

  render() {
    const {
      clientName,
      clientNameFull,
      clientTag,
      isActive,
      industry,
      defaultCurrencyCode,
      defaultDistanceUnits,
      description,
      notifyUser,
      errorMessage,
    } = this.state

    return (
      <>
        <FormContainer>
          <Form>
            <FormItem>
              <FormLabel>Client Name, Short</FormLabel>
              <FormText value={clientName} name="clientName" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Client Name, Full</FormLabel>
              <FormText value={clientNameFull} name="clientNameFull" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Client Tag</FormLabel>
              <FormText value={clientTag} name="clientTag" onChange={this.changeInput} />
            </FormItem>
            <FormItem>
              <FormLabel>Client Status</FormLabel>
              <Toggle checked={isActive} icons={false} onChange={this.toggleActive} />
            </FormItem>
          </Form>
          <Form>
            <Logo>
              <img src={ClientLogo} alt="client logo" />
              <div>
                <Button text="Change" />
              </div>
            </Logo>
            <FormItem>
              <FormLabel>Industry</FormLabel>
              <Select
                options={industries}
                value={industry}
                onChange={e => this.changeInput(e, 'industry')}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Default Currency</FormLabel>
              <Select
                options={currencies}
                value={defaultCurrencyCode}
                onChange={e => this.changeInput(e, 'defaultCurrencyCode')}
              />
            </FormItem>
            <FormItem>
              <FormLabel>Default Distance Units</FormLabel>
              <Select
                options={distanceUnits}
                value={defaultDistanceUnits}
                onChange={e => this.changeInput(e, 'defaultDistanceUnits')}
              />
            </FormItem>
          </Form>
        </FormContainer>
        <Notes
          value={description}
          name="description"
          onChange={this.changeInput}
          style={{ width: '90%' }}
        />
        <div
          style={{
            display: 'flex',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: '2.5em',
          }}
        >
          <Button text="Save" onClick={this.handleSave} />
        </div>
        <Modal open={notifyUser} handleClose={() => this.toggleModal()}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'Client information successfully updated'}
          </div>
          <Save text="Close" onClick={() => this.toggleModal()} />
        </Modal>
      </>
    )
  }
}

export default withApollo(GeneralForm)
