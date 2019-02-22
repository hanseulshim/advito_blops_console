import React, { Component } from 'react';
import Icon from 'components/common/Icon';
import Select from 'react-select';
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

const status = [{ label: 'Active', value: 1 }, { label: 'Air Inactive', value: 2 }];

class AddDivision extends Component {
  constructor(props) {
    super(props);
    this.state = {
      divisionName: '',
      divisionNameFull: '',
      divisionStatus: '',
      divisionTag: '',
      divisionGcn: '',
      notes: '',
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

  handleSave = async () => {
    // const payload = { ...this.state };
    // delete payload.errorMessage;
    // delete payload.saveModal;
    // const { client, loggedIn, fetchMore } = this.props;
    // payload.sessionToken = loggedIn.sessionToken;
    // payload.clientId = loggedIn.clientId;
    // payload.roleId = payload.role.value;
    // const { data } = await client.mutate({
    //   mutation: EDIT_USER,
    //   variables: { ...payload },
    // });
    // if (data.editUser.statusCode !== 200) {
    //   this.setState({ errorMessage: data.editUser.body.apimessage });
    // }
    // fetchMore({
    //   variables: {
    //     sessionToken: loggedIn.sessionToken,
    //     clientId: loggedIn.clientId,
    //   },
    //   updateQuery: (prev, { fetchMoreResult }) => {
    //     if (!fetchMoreResult) return prev;
    //     return fetchMoreResult;
    //   },
    // });
    // this.toggleSaveModal();
  };

  render() {
    const {
      divisionName,
      divisionNameFull,
      divisionStatus,
      divisionTag,
      divisionGcn,
      notes,
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
            <Select
              options={status}
              value={divisionStatus}
              name="nameFirst"
              onChange={e => this.changeInput(e, 'role')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Division Tag</ModalFormLabel>
            <ModalFormText value={divisionTag} name="nameLast" onChange={this.changeInput} />
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
              value={divisionGcn}
              name="divisionGcn"
              onChange={this.changeInput}
              disabled={this.state.gcnLock}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Notes</ModalFormLabel>
            <Notes value={notes} name="notes" onChange={this.changeInput} />
          </ModalFormItem>
        </ModalForm>
        <Save text="Save" onClick={this.handleSave} />
        <Modal open={saveModal} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>
            {errorMessage ? `Error: ${errorMessage}` : 'User successfully updated'}
          </div>
          <Save text="Close" onClick={() => this.toggleNotification()} />
        </Modal>
      </>
    );
  }
}

export default AddDivision;
