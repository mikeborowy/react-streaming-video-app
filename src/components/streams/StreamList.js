import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onGetStreamListAPI } from '../../reducers/streams';

class StreamShow extends Component {

    componentDidMount() {
        this.props.onGetStreamListAPI();
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        {stream.title}
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    streams: Object.values(state.streams)
});

const mapDisptchToProps = (dispatch) => ({
    onGetStreamListAPI: () => dispatch(onGetStreamListAPI())
});

export default connect(
    mapStateToProps,
    mapDisptchToProps
)(StreamShow);