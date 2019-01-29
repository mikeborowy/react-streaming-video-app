import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { onGetStreamAPI } from '../../reducers/streams';
import { flvAPI } from '../../api';

class StreamShow extends Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.onGetStreamAPI(id);
        this.initPlayer();
    }

    componentDidUpdate() {
        this.initPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    initPlayer() {
        const { id } = this.props.match.params;

        if(this.player || !this.props.stream) {
            return;
        }

        this.player = flvAPI(id);
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }
    render() {

       if(!this.props.stream) {
           return <div>Loading...</div>
       }

        const { 
            title,
            description
        } = this.props.stream;
        
        return (
            <div>
                <video 
                    controls
                    ref={this.videoRef} 
                    style={{width: '100%'}}
                />
                <h1>{title}</h1>
                <h5>{description}</h5>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
})

const mapDispatchToState = (dispatch) => bindActionCreators({
    onGetStreamAPI
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToState
)(StreamShow);