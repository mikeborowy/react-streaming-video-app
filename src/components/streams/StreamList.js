import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetStreamListAPI } from '../../reducers/streams';

class StreamShow extends Component {

    componentDidMount() {
        this.props.onGetStreamListAPI();
    }

    render() {
        return (
            <div>
                StreamShow
            </div>
        );
    }
};

export default connect(
    null,
    { onGetStreamListAPI }
)(StreamShow);