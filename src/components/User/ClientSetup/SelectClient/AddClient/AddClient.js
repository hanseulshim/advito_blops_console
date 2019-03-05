import React, { Component } from 'react';
import Button from 'components/common/Button';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';
import { withApollo } from 'react-apollo';

//GraphQl Mutation
import { CREATE_CLIENT } from 'components/graphql/query/client';

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
      errorMessage: '',
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

  toggleModal = () => {
    if (!this.state.errorMessage && this.state.notifyUser) this.props.onClose();
    else this.setState({ notifyUser: !this.state.notifyUser });
  };

  handleSave = async () => {
    const payload = { ...this.state };
    delete payload.errorMessage;
    delete payload.notifyUser;

    const { client, fetchMore } = this.props;
    payload.industry = payload.industry.value;
    payload.defaultCurrencyCode = payload.defaultCurrencyCode.value;
    payload.defaultDistanceUnits = payload.defaultDistanceUnits.value;

    await client.mutate({
      mutation: CREATE_CLIENT,
      variables: { ...payload },
    });
    this.setState({
      errorMessage: '',
    });
    this.toggleModal();

    fetchMore({
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
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
      defaultCurrencyCode,
      defaultDistanceUnits,
      description,
      notifyUser,
      errorMessage,
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

        <Save text="Save" onClick={this.handleSave} />
        <Modal open={notifyUser} handleClose={() => this.toggleModal()}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'Client successfully created.'}
          </div>
          <Save text="Close" onClick={() => this.toggleModal()} />
        </Modal>
      </>
    );
  }
}

export default withApollo(AddClient);
