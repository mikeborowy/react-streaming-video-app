import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { onGetStreamListAPI } from '../../reducers/streams';

class StreamShow extends Component {

    componentDidMount() {
        this.props.onGetStreamListAPI();
    }

    renderAdmin(stream) {
        if (stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <Link 
                        to={`/streams/edit/${stream.id}`}
                        className="ui button primary"
                    >
                        EDIT
                    </Link>
                    <Link 
                        to={`/streams/delete/${stream.id}`}
                        className="ui button negative"
                    >
                        DELETE
                    </Link>
                </div>
            );  
        }
    }

    renderList() {
        return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`}>
                            {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                </div>
            );
        });
    }

    renderCreateStream() {
        if(this.props.isSignedIn) {
            return(
                <div className={{ textAlign: "right" }}>
                    <Link 
                        to='/streams/new' 
                        className='ui button primary' 
                    >
                        Create Stream
                    </Link>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui celled list">
                    {this.renderList()}
                </div>
                    {this.renderCreateStream()}
            </div>
        );
    }
};

const mapStateToProps = (state) => ({
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
});

const mapDisptchToProps = (dispatch) => ({
    onGetStreamListAPI: () => dispatch(onGetStreamListAPI())
});

export default connect(
    mapStateToProps,
    mapDisptchToProps
)(StreamShow);