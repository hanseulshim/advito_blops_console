import React from 'react';

class EditClient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (<p>{this.props.match.params.client}</p>);
    }
}

export default EditClient;
