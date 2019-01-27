import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { Link } from 'react-router-dom'; 
import history from '../../history';
import {
    onGetStreamAPI,
    onDeleteStreamAPI
} from '../../reducers/streams';
import Modal from '../shared/modal/Modal';

class StreamDelete extends Component {

    componentDidMount() {
        this.props.onGetStreamAPI(this.props.match.params.id);
    }

    onDeleteHandler = () => {
        this.props.onDeleteStreamAPI(this.props.match.params.id);
    }

    modalCfg = () => ({
        title: 'Delete Stream',
        content: (() => { 
            if(!this.props.stream) {
                return 'Are you sure you want to delete stream?';
            }
            return `Are you sure you want to delete stream with title: ${this.props.stream.title}`
        })(),
        buttons: (
            <Fragment>
                <button onClick={this.onDeleteHandler} className="ui button primary negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        ),
        onDismiss: () => { history.push('/') }
    });

    render() {
        return <Modal { ...this.modalCfg() } />;
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

const mapDispatchToProps = {
    onGetStreamAPI,
    onDeleteStreamAPI
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreamDelete);