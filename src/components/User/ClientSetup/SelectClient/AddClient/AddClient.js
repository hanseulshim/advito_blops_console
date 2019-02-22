import React, { Component } from 'react';
import Button from 'components/common/Button';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';


//Form Styles
import { TitleRow, Close, ModalForm, ModalFormItem, ModalFormLabel, ModalFormText, ModalText, ModalSubText, Save, Notes } from '../../../Styles/ModalFormStyles';
import '../../../Styles/toggle.css';

const industries = [
    { label: 'Information Technology', value: 1 },
    { label: 'Travel', value: 2 },
    { label: 'Software Development', value: 3 },
    { label: 'Education', value: 4 },
    { label: 'Public Service', value: 5 },
];

class AddClient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clientNameShort: '',
            clientNameFull: '',
            gcn: '',
            lanyonClientCode: '',
            clientId: '',
            clientTag: '',
            isEnabled: true,
            industry: '',
            defaultCurrrency: '',
            defaultDistanceUnits: '',
            clientLogo: '',
            notes: ''
        };
    }

    changeInput = (e, name) => {
        if (e.label) {
            this.setState({ [name]: e });
        }
        else {
            this.setState({
                [e.target.name]: e.target.value,
            });
        }
    };

    handleSave = async () => {
        // const payload = { ...this.state };
        // delete payload.errorMessage;
        // delete payload.notifyUser;
        // const { client, loggedIn, fetchMore } = this.props;
        // payload.sessionToken = loggedIn.sessionToken;
        // payload.clientId = loggedIn.clientId;
        // payload.roleId = payload.role.value;
        // const { data } = await client.mutate({
        //     mutation: EDIT_USER,
        //     variables: { ...payload },
        // });

        // if (data.editUser.statusCode !== 200) {
        //     this.setState({ errorMessage: data.editUser.body.apimessage });
        // }

        // fetchMore({
        //     variables: {
        //         sessionToken: loggedIn.sessionToken,
        //         clientId: loggedIn.clientId,
        //     },
        //     updateQuery: (prev, { fetchMoreResult }) => {
        //         if (!fetchMoreResult) return prev;
        //         return fetchMoreResult;
        //     },
        // })
    };

    render() {
        const {
            clientNameShort,
            clientNameFull,
            gcn,
            lanyonClientCode,
            clientId,
            clientTag,
            isEnabled,
            industry,
            defaultCurrrency,
            defaultDistanceUnits,
            clientLogo,
            notes,
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
                        <ModalFormText value={clientNameShort} name="clientNameShort" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Client Name, Full *</ModalFormLabel>
                        <ModalFormText value={clientNameFull} name="clientNameFull" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>GCN ^</ModalFormLabel>
                        <ModalFormText value={gcn} name="gcn" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Lanyon Code *</ModalFormLabel>
                        <ModalFormText value={lanyonClientCode} name="lanyonClientCode" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Client ID *</ModalFormLabel>
                        <ModalFormText value={clientId} name="clientId" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Client Tag *</ModalFormLabel>
                        <ModalFormText value={clientTag} name="clientTag" onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Client Active *</ModalFormLabel>
                        <Toggle checked={isEnabled} icons={false} onChange={this.changeInput} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Industry *</ModalFormLabel>
                        <Select options={industries} value={industry} onChange={e => this.changeInput(e, 'industry')} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Default Currency</ModalFormLabel>
                        <Select options={industries} value={defaultCurrrency} onChange={e => this.changeInput(e, 'defaultCurrrency')} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Default Distance Units</ModalFormLabel>
                        <Select options={industries} value={defaultDistanceUnits} onChange={e => this.changeInput(e, 'defaultDistanceUnits')} />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Client Logo</ModalFormLabel>
                        <Button text="Upload Image" />
                    </ModalFormItem>
                    <ModalFormItem>
                        <ModalFormLabel>Notes</ModalFormLabel>
                        <Notes value={notes} name="notes" onChange={this.changeInput} />
                    </ModalFormItem>
                </ModalForm>
                <ModalText>
                    {`Passwords must be a minimum of eight (8) characters
                    and includes (3) of the following (4) criteria:
                    `}
                </ModalText>
                <ModalSubText>
                    {`- Lowercase character
                    - Upper case character
                    - Number
                    - Special characters (e.g.!, $, #, %)
                    `}
                </ModalSubText>
                <Save text="Save" onClick={this.handleSave} />
                {/* <Modal open={notifyUser} handleClose={() => this.toggleNotification()}>
                    <div style={{ textAlign: 'center' }}>
                        {errorMessage ? `Error: ${errorMessage}` : 'User successfully updated'}
                    </div>
                    <Save text="Close" onClick={() => this.toggleNotification()} />
                </Modal> */}
            </>
        );
    }
}

export default AddClient;
