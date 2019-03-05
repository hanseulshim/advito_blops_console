import React, { Component } from 'react';
import Icon from 'components/common/Icon';
import Toggle from 'react-toggle';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';
import { withApollo } from 'react-apollo';

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
import { UPDATE_DIVISION } from 'components/graphql/query/division';

class EditDivisionForm extends Component {
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

  componentDidMount() {
    const { division } = this.props;
    const state = {};
    Object.keys(division).forEach(key => {
      if (division[key]) {
        state[key] = division[key];
      }
    });
    this.setState({
      ...state,
    });
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

  toggleActive = () => this.setState({ isActive: !this.state.isActive });

  toggleLock = () => this.setState({ gcnLock: !this.state.gcnLock });

  handleSave = async () => {
    const payload = { ...this.state };
    delete payload.errorMessage;
    delete payload.saveModal;
    const { client, fetchMore, division, selectedClient } = this.props;
    payload.clientDivisionId = division.id;

    await client.mutate({
      mutation: UPDATE_DIVISION,
      variables: { ...payload },
    });
    fetchMore({
      variables: {
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
    const { handleClose } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>Edit Division</SectionTitle>
          <Close className="fas fa-times" onClick={handleClose} />
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
        <Modal open={saveModal} handleClose={() => handleClose()} size="medium">
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'Division successfully updated'}
          </div>
          <Save text="Close" onClick={() => handleClose()} />
        </Modal>
      </>
    );
  }
}

export default withApollo(EditDivisionForm);
