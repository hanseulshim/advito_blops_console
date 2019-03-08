import React, { Component } from 'react';

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
import { Mutation } from 'react-apollo';
import { CREATE_DIVISION, GET_DIVISIONS } from 'components/graphql/query';

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
      notifyUser: false,
      message: '',
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

  toggleNotification = message => {
    this.setState({
      notifyUser: !this.state.notifyUser,
      message,
    });
  };

  toggleLock = () => this.setState({ gcnLock: !this.state.gcnLock });

  toggleActive = () => this.setState({ isActive: !this.state.isActive });

  render() {
    const {
      divisionName,
      divisionNameFull,
      isActive,
      divisionTag,
      gcn,
      description,
      message,
      notifyUser,
      gcnLock,
    } = this.state;
    const { onClose, selectedClient } = this.props;
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
        <Mutation
          mutation={CREATE_DIVISION}
          update={(cache, { data: { createDivision } }) => {
            const { divisionList } = cache.readQuery({
              query: GET_DIVISIONS,
              variables: { clientId: selectedClient.id },
            });

            const newDivision = { ...this.state };
            delete newDivision.message;
            delete newDivision.notifyUser;
            delete newDivision.gcnLock;
            newDivision.clientId = selectedClient.id;
            divisionList.push(newDivision);
            cache.writeQuery({
              query: GET_DIVISIONS,
              data: divisionList,
            });
          }}
          onCompleted={() => {
            this.toggleNotification('Division successfully created');
          }}
          onError={() => {
            this.toggleNotification('Error creating Division.');
          }}
        >
          {createDivision => (
            <Save
              text="Save"
              onClick={e => {
                e.preventDefault();
                createDivision({
                  variables: {
                    clientId: selectedClient.id,
                    divisionName,
                    divisionNameFull,
                    isActive,
                    divisionTag,
                    gcn,
                    description,
                  },
                });
              }}
            />
          )}
        </Mutation>
        <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>{message}</div>
          <Save text="Close" onClick={() => onClose()} />
        </Modal>
      </>
    );
  }
}

export default AddDivision;
