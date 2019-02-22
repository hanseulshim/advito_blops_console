import React, { Component } from 'react'
import styled from 'styled-components'

import Shayan from 'assets/shayan.jpeg'
import Button from 'components/common/Button'
import Select from 'react-select';
import Modal from 'components/common/Modal'
import Loader from 'components/common/Loader'

import { FormContainer, Form, Avatar, FormItem, FormLabel, FormText, Save, Notes } from '../../../Styles/FormStyles';

const dateTimeOptions = [
    {
        label: 'European(01 JAN 2017)',
        value: 'european',
    },
    {
        label: 'Western(JAN 01 2017)',
        value: 'western',
    },
]

const timeZones = [
    {
        label: '(UTC-05:00) Eastern Time',
        value: 'EST',
    },
    {
        label: '(MTN-07:00) Mountain',
        value: 'MT',
    },
]

const Logo = styled.div`
flex:1;
display:flex;
align-items:center;

img{
    align-self:flex-start;
    width:5em;
    border-radius:50%;
    margin-right:5%;
}`

class GeneralForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            nameFirst: '',
            nameLast: '',
            timezoneDefault: timeZones[0],
            dateFormatDefault: dateTimeOptions[0],
            emailNotifications: false,
            profilePicturePath: '',
            openSave: false,
            openPassword: false,
            errorMessage: '',
        }

    }

    changeInput = (e, name) => {
        if (e.label) {
            this.setState({ [name]: e })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }

    toggleModal = e => {

    }

    saveClient = async () => {

    }

    render() {
        const {
            username,
            nameFirst,
            nameLast,
            timezoneDefault,
            dateFormatDefault,
            openSave,
            openPassword,
            errorMessage,
        } = this.state
        const { user, client } = this.props

        return this.loading ? (
            <Loader />
        ) : (
                <>
                    <FormContainer>
                        <Form>
                            <FormItem>
                                <FormLabel>Client Name, Short</FormLabel>
                                <FormText value={username} name="username" onChange={this.changeInput} />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Client Name, Full</FormLabel>
                                <FormText value={username} name="username" onChange={this.changeInput} />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Client Tag</FormLabel>
                                <FormText value={username} name="username" onChange={this.changeInput} />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Client Status</FormLabel>
                                <Select
                                    options={dateTimeOptions}
                                    value={dateFormatDefault}
                                    onChange={e => this.changeInput(e, 'dateFormatDefault')}
                                />
                            </FormItem>
                        </Form>
                        <Form>
                            <Logo>
                                <img src={Shayan} alt="Avatar" />
                                <div>
                                    <Button text="Change" />
                                </div>
                            </Logo>
                            <FormItem>
                                <FormLabel>Industry</FormLabel>
                                <Select
                                    options={dateTimeOptions}
                                    value={dateFormatDefault}
                                    onChange={e => this.changeInput(e, 'dateFormatDefault')}
                                />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Default Currency</FormLabel>
                                <Select
                                    options={dateTimeOptions}
                                    value={dateFormatDefault}
                                    onChange={e => this.changeInput(e, 'dateFormatDefault')}
                                />
                            </FormItem>
                            <FormItem>
                                <FormLabel>Default Distance Units</FormLabel>
                                <Select
                                    options={dateTimeOptions}
                                    value={dateFormatDefault}
                                    onChange={e => this.changeInput(e, 'dateFormatDefault')}
                                />
                            </FormItem>
                        </Form>
                    </FormContainer>
                    <Notes style={{ width: '100%' }} />
                    <Save text="Save" onClick={this.saveUser} />
                    <Modal open={openSave} handleClose={() => this.toggleModal('openSave')}>
                        <div style={{ textAlign: 'center' }}>
                            {errorMessage ? `Error: ${errorMessage}` : 'User information successfully updated'}
                        </div>
                        <Save text="Close" onClick={() => this.toggleModal('openSave')} />
                    </Modal>
                </>
            )
    }
}

export default GeneralForm;