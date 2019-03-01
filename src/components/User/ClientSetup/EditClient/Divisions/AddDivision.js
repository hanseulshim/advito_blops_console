import React, { Component } from 'react';
import { withApollo } from 'react-apollo';

import Icon from 'components/common/Icon';
import Toggle from 'react-toggle';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';

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

//Query
import { CREATE_DIVISION } from 'components/graphql/query/division';

// const status = [{ label: 'Active', value: 'Active' }, { label: 'Inactive', value: 'Inactive' }];

class AddDivision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionName: '',
      divisionNameFull: '',
      isActive: false,
      divisionTag: '',
      gcn: '',
      description: '',
      gcnLock: true,
      saveModal: false,
      errorMessage: '',
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

  toggleSaveModal = () => this.setState({ saveModal: !this.state.saveModal });

  toggleLock = () => this.setState({ gcnLock: !this.state.gcnLock });

  toggleActive = () => this.setState({ isActive: !this.state.isActive });

  handleSave = async () => {
    const payload = { ...this.state };
    delete payload.errorMessage;
    delete payload.saveModal;
    delete payload.gcnLock;

    const { client, user, fetchMore, selectedClient } = this.props;
    payload.sessionToken = user.sessionToken;
    payload.clientId = selectedClient.id;

    const { data } = await client.mutate({
      mutation: CREATE_DIVISION,
      variables: { ...payload },
    });
    if (data.createDivision.statusCode !== 200) {
      this.setState({ errorMessage: data.createDivision.body.apimessage });
    }
    fetchMore({
      variables: {
        sessionToken: user.sessionToken,
        clientId: selectedClient.id,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
    this.toggleSaveModal();
  };

  render() {
    const {
      divisionName,
      divisionNameFull,
      isActive,
      divisionTag,
      gcn,
      description,
      errorMessage,
      saveModal,
      gcnLock,
    } = this.state;
    const { onClose } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>Create Division</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>Division Name *</ModalFormLabel>
            <ModalFormText value={divisionName} name="divisionName" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Division Name, Full *</ModalFormLabel>
            <ModalFormText
              value={divisionNameFull}
              name="divisionNameFull"
              onChange={this.changeInput}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Division Status</ModalFormLabel>
            <Toggle checked={isActive} icons={false} onChange={this.toggleActive} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Division Tag</ModalFormLabel>
            <ModalFormText value={divisionTag} name="divisionTag" onChange={this.changeInput} />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>
              Division GCN
              <Icon
                className={gcnLock ? 'fas fa-lock' : 'fas fa-unlock'}
                onClick={this.toggleLock}
                style={{ cursor: 'pointer', marginLeft: '1em' }}
              />
            </ModalFormLabel>
            <ModalFormText
              value={gcn}
              name="gcn"
              onChange={this.changeInput}
              disabled={this.state.gcnLock}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Notes</ModalFormLabel>
            <Notes value={description} name="description" onChange={this.changeInput} />
          </ModalFormItem>
        </ModalForm>
        <Save text="Save" onClick={this.handleSave} />
        <Modal open={saveModal} handleClose={() => this.props.onClose()} size="medium">
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'Division successfully created'}
          </div>
          <Save text="Close" onClick={() => this.props.onClose()} />
        </Modal>
      </>
    );
  }
}

export default withApollo(AddDivision);
