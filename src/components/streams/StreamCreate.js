import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onCreateStreamAPI } from '../../reducers/streams';
import StreamForm from './StreamForm'; 

class StreamCreate extends Component {

    submitHandler = (formValues) => {
        this.props.onCreateStreamAPI(formValues);
    }
    render() {

        return (
            <div>
                <h3>Create Stream</h3>
                <StreamForm onSubmit={this.submitHandler}/>
            </div>
        );
    }
}

const mapDispatchToProps = (disptach) => {
    return bindActionCreators({
        onCreateStreamAPI
    },disptach)
}

export default connect(
    null,
    mapDispatchToProps
)(StreamCreate);