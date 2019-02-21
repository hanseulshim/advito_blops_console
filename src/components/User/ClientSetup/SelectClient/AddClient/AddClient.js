import React, { Component } from 'react';
import Button from 'components/common/Button';
import Toggle from 'react-toggle';
import Select from 'react-select';
import { SectionTitle } from 'components/common/Typography';
import Modal from 'components/common/Modal';


//Form Styles
import { TitleRow, Close, Form, FormItem, FormLabel, FormText, Text, SubText, Save, Notes } from '../../../Styles/FormStyles';
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
                <Form>
                    <FormItem>
                        <FormLabel>Client Name, Short *</FormLabel>
                        <FormText value={clientNameShort} name="clientNameShort" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Client Name, Full *</FormLabel>
                        <FormText value={clientNameFull} name="clientNameFull" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>GCN ^</FormLabel>
                        <FormText value={gcn} name="gcn" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Lanyon Code *</FormLabel>
                        <FormText value={lanyonClientCode} name="lanyonClientCode" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Client ID *</FormLabel>
                        <FormText value={clientId} name="clientId" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Client Tag *</FormLabel>
                        <FormText value={clientTag} name="clientTag" onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Client Active *</FormLabel>
                        <Toggle checked={isEnabled} icons={false} onChange={this.changeInput} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Industry *</FormLabel>
                        <Select options={industries} value={industry} onChange={e => this.changeInput(e, 'industry')} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Default Currency</FormLabel>
                        <Select options={industries} value={defaultCurrrency} onChange={e => this.changeInput(e, 'defaultCurrrency')} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Default Distance Units</FormLabel>
                        <Select options={industries} value={defaultDistanceUnits} onChange={e => this.changeInput(e, 'defaultDistanceUnits')} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Client Logo</FormLabel>
                        <Button text="Upload Image" />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Notes</FormLabel>
                        <Notes value={notes} name="notes" onChange={this.changeInput} />
                    </FormItem>
                </Form>
                <Text>
                    {`Passwords must be a minimum of eight (8) characters
                    and includes (3) of the following (4) criteria:
                    `}
                </Text>
                <SubText>
                    {`- Lowercase character
                    - Upper case character
                    - Number
                    - Special characters (e.g.!, $, #, %)
                    `}
                </SubText>
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
