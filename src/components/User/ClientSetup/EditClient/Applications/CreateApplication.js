import React, { Component } from 'react';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';

//Query

import { withUserContext } from 'components/context';
//Mutation
import { Mutation } from 'react-apollo';
import { CREATE_USER } from 'components/graphql/mutation';
import Checkbox from 'components/common/Checkbox';

import {
  TitleRow,
  Close,
  ModalForm,
  ModalFormItem,
  ModalFormLabel,
  Save,
} from '../../../Styles/ModalFormStyles';
import '../../../Styles/toggle.css';

const applications = [
  { label: 'Hotel', value: 1 },
  { label: 'Air', value: 2 },
  { label: '360 Analytics', value: 3 },
];

class CreateApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      notifyUser: false,
    };
  }

  changeInput = (e, name) => {
    if (e.label) {
      this.setState({ [name]: e });
    } else {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    }
  };

  toggleNotification = message => {
    this.setState({
      notifyUser: !this.state.notifyUser,
      message,
    });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isEnabled: !prevState.active,
    }));
  };

  renderFeatures = () => {
    const { application } = this.state;
    const { applications } = this.props;

    const selected = applications.filter(app => app.id === application.value)[0];

    return selected.features.length ? (
      selected.features.map((feature, idx) => (
        <Checkbox
          type="checkbox"
          checked={feature.isActive}
          name={feature.featureName}
          onChange={e => this.changeInput(e, `${feature.featureName}`)}
          key={'feature' + idx}
        >
          {feature.featureName}
        </Checkbox>
      ))
    ) : (
      <p>No features available</p>
    );
  };

  render() {
    const { application, message, notifyUser } = this.state;
    const {
      onClose,
      context: { user },
    } = this.props;
    return (
      <>
        <TitleRow>
          <SectionTitle>New Application</SectionTitle>
          <Close className="fas fa-times" onClick={onClose} />
        </TitleRow>
        <ModalForm>
          <ModalFormItem>
            <ModalFormLabel>Application Name</ModalFormLabel>
            <Select
              options={applications}
              value={application}
              onChange={e => this.changeInput(e, 'application')}
            />
          </ModalFormItem>
          <ModalFormItem>
            <ModalFormLabel>Enabled</ModalFormLabel>
            <ModalFormLabel>
              <Toggle defaultChecked={true} icons={false} onChange={this.handleToggle} />
            </ModalFormLabel>
          </ModalFormItem>
          {application && (
            <ModalFormItem>
              <ModalFormLabel>Features</ModalFormLabel>
              {this.renderFeatures()}
            </ModalFormItem>
          )}
        </ModalForm>
        {/* <Mutation
          mutation={CREATE_USER}
          update={(cache, { data: { createUser } }) => {
            const { userList } = cache.readQuery({ query: USER_LIST });
            const newUser = { ...this.state };
            delete newUser.message;
            delete newUser.notifyUser;
            newUser.role = newUser.role.value;
            userList.push(newUser);
            cache.writeQuery({
              query: USER_LIST,
              data: userList,
            });
          }}
          onCompleted={() => {
            this.toggleNotification('User successfully created');
          }}
          onError={() => {
            this.toggleNotification('Error creating User.');
          }}
        >
          {createUser => (
            <Save
              text="Save"
              onClick={e => {
                e.preventDefault();
                createUser({
                  variables: {
                    clientId: user.clientId,
                    username,
                    isEnabled,
                    nameFirst,
                    nameLast,
                    phone,
                    address,
                    roleId: role.value,
                    pwd,
                    confirmPwd,
                  },
                });
              }}
            />
          )}
        </Mutation> */}
        <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
          <div style={{ textAlign: 'center' }}>{message}</div>
          <Save text="Close" onClick={() => onClose()} />
        </Modal>
      </>
    );
  }
}

export default withUserContext(CreateApplication);
