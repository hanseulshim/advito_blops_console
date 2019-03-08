import React, { Component } from 'react';
import Button from 'components/common/Button';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';


//GraphQl Mutation
import { Mutation } from 'react-apollo';
import { CREATE_CLIENT, GET_CLIENTS } from 'components/graphql/query';

//Form Styles
import {
  TitleRow,
  Close,
  ModalForm,
  ModalFormItem,
  ModalFormLabel,
  ModalFormText,
  Save,
  Notes,
} from '../../../Styles/ModalFormStyles';
import '../../../Styles/toggle.css';

const industries = [
  { label: 'Information Technology', value: 'Information Technology' },
  { label: 'Travel', value: 'Travel' },
  { label: 'Software Development', value: 'Software Development' },
  { label: 'Education', value: 'Education' },
  { label: 'Public Service', value: 'Public Service' },
];

const currencies = [{ label: 'US Dollar', value: 'Dollar' }, { label: 'Euro', value: 'Euro' }];

const distanceUnits = [
  { label: 'Miles', value: 'Miles' },
  { label: 'Kilometers', value: 'Kilometers' },
];

class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientName: '',
      clientNameFull: '',
      clientTag: '',
      gcn: '',
      lanyonClientCode: '',
      isActive: true,
      industry: '',
      defaultCurrencyCode: '',
      defaultDistanceUnits: '',
      logoPath: '',
      description: '',
      message: '',
      notifyUser: false,
    };
  }

  changeInput = (e, name) => {
    if (e.label) {
      this.setState({ [name]: e });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  toggleActive = () => this.setState({ isActive: !this.state.isActive });

  toggleNotification = (message) => {
    this.setState({
      notifyUser: !this.state.notifyUser,
      message
    });
  };

  render() {
    const {
      clientName,
      clientNameFull,
      gcn,
      lanyonClientCode,
      clientTag,
      isActive,
      industry,
      logoPath,
      defaultCurrencyCode,
      defaultDistanceUnits,
      description,
      notifyUser,
      message,
    } = this.state;
    const { onClose } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>New Client</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>Client Name, Short *</ModalFormLabel>
            <ModalFormText value={clientName} name="clientName" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Client Name, Full *</ModalFormLabel>
            <ModalFormText
              value={clientNameFull}
              name="clientNameFull"
              onChange={this.changeInput}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>GCN </ModalFormLabel>
            <ModalFormText value={gcn} name="gcn" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Lanyon Code *</ModalFormLabel>
            <ModalFormText
              value={lanyonClientCode}
              name="lanyonClientCode"
              onChange={this.changeInput}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Client Tag *</ModalFormLabel>
            <ModalFormText value={clientTag} name="clientTag" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Client Active *</ModalFormLabel>
            <Toggle checked={isActive} icons={false} onChange={this.toggleActive} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Industry *</ModalFormLabel>
            <Select
              options={industries}
              value={industry}
              onChange={e => this.changeInput(e, 'industry')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Default Currency</ModalFormLabel>
            <Select
              options={currencies}
              value={defaultCurrencyCode}
              onChange={e => this.changeInput(e, 'defaultCurrencyCode')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Default Distance Units</ModalFormLabel>
            <Select
              options={distanceUnits}
              value={defaultDistanceUnits}
              onChange={e => this.changeInput(e, 'defaultDistanceUnits')}
            />
          </ModalFormItem>
          <div
            style={{
              flex: '1',
              marginBottom: '2em',
            }}
          >
            <ModalFormLabel>Client Logo</ModalFormLabel>
            <Button text="Upload Image" style={{ width: '10em', marginLeft: '1em' }} />
          </div>
          <ModalFormItem>
            <ModalFormLabel>Notes</ModalFormLabel>
            <Notes value={description} name="description" onChange={this.changeInput} />
          </ModalFormItem>
        </ModalForm>
        <Mutation
          mutation={CREATE_CLIENT}
          update={(cache, { data: { createClient } }) => {
            const { clientList } = cache.readQuery({ query: GET_CLIENTS });
            const newClient = { ...this.state }
            delete newClient.message;
            delete newClient.notifyUser;
            newClient.industry = newClient.industry.value;
            newClient.defaultCurrencyCode = newClient.defaultCurrencyCode.value;
            newClient.defaultDistanceUnits = newClient.defaultDistanceUnits.value;
            clientList.push(newClient)

            cache.writeQuery({
              query: GET_CLIENTS,
              data: clientList,
            });
          }}
          onCompleted={() => {
            this.toggleNotification('Client successfully created')
          }}
          onError={() => {
            this.toggleNotification('Error creating Client.')
          }}
        >
          {createClient =>
            <Save text="Save" onClick={(e) => {
              e.preventDefault();
              createClient({
                variables: {
                  clientName,
                  clientNameFull,
                  gcn,
                  lanyonClientCode,
                  clientTag,
                  isActive,
                  industry: industry.value,
                  defaultCurrencyCode: defaultCurrencyCode.value,
                  defaultDistanceUnits: defaultDistanceUnits.value,
                  description,
                  logoPath
                }
              })
            }} />
          }
        </Mutation>
        <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>
            {message}
          </div>
          <Save text="Close" onClick={() => onClose()} />
        </Modal>
      </>
    );
  }
}

export default AddClient;
