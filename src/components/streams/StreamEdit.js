import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onGetStreamAPI, onEditStreamAPI } from '../../reducers/streams';
import _ from 'lodash';
import StreamForm from './StreamForm';

class StreamEdit extends Component {

    componentDidMount() {
        this.props.onGetStreamAPI(this.props.match.params.id);
    }

    submitHandler = (formValues) => {
        this.props.onEditStreamAPI(this.props.match.params.id, formValues);
    }
    render(){
        return (
            <div>
                <h3>Stream Edit</h3>
                <StreamForm
                    initialValues={_.pick(this.props.stream, 'title', 'description')}
                    onSubmit={this.submitHandler}
                />
            </div>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

const mapDispatchToPros = (dispatch) =>  {
    return bindActionCreators({
         onGetStreamAPI,
         onEditStreamAPI 
    }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToPros
)(StreamEdit);