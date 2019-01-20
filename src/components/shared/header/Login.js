import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSignIn, onSignOut } from '../../../reducers/auth';
class Login extends Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
            .init({
                //react-streaming-app: 
                clientId: '345522151377-vkhlm3isk7buijhs4pu4ljk7tigueiu2.apps.googleusercontent.com',
                scope: 'email'
            })
            .then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        console.log(this.props);
        console.log(isSignedIn);
        if (isSignedIn ) {
            this.props.onSignIn(this.auth.currentUser.get().getId())
        } else {
            this.props.onSignOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderLoginBtn() {
        if( this.props.isSignedIn === null ) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button 
                    className="ui red google button"
                    onClick={this.onSignOutClick} >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button 
                    className="ui red google button"
                    onClick={this.onSignInClick} >
                    <i className="google icon" />
                    Sign in with Google
                </button>
            );
        }
    }

    render() {
        return (
            <div>
                {this.renderLoginBtn()}
            </div>
        );
    }
};


const mapStateToProps = (state) => ({
    isSignedIn: state.auth.isSignedIn
});

const mapDispatchToProps = (dispatch) => ({
    onSignIn,
    onSignOut
});

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Login);