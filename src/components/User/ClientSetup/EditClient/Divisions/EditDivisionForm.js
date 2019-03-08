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

//Mutation
import { Mutation } from 'react-apollo';
import { UPDATE_DIVISION } from 'components/graphql/mutation';

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
      notifyUser: false,
      message: '',
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

  toggleNotification = message => {
    this.setState({
      notifyUser: !this.state.notifyUser,
      message,
    });
  };

  toggleActive = () => this.setState({ isActive: !this.state.isActive });

  toggleLock = () => this.setState({ gcnLock: !this.state.gcnLock });

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
      id,
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
        <Mutation
          mutation={UPDATE_DIVISION}
          key={id}
          onCompleted={() => {
            this.toggleNotification('Division successfully modified');
          }}
          onError={() => {
            this.toggleNotification('Error modifiying Division.');
          }}
        >
          {updateDivision => (
            <Save
              text="Save"
              onClick={e => {
                e.preventDefault();
                updateDivision({
                  variables: {
                    id,
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
        <Modal open={notifyUser} handleClose={() => handleClose()} size="medium">
          {message}
          <Save text="Close" onClick={() => handleClose()} />
        </Modal>
      </>
    );
  }
}

export default EditDivisionForm;
