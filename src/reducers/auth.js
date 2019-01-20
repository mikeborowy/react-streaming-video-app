export const types = {
    SIGN_IN: 'SIGN_IN',
    SIGN_OUT: 'SIGN_OUT'
}

export const onSignIn = (userId) => ({ type: types.SIGN_IN, payload: userId });
export const onSignOut = () => ({ type: types.SIGN_OUT });

const INITIAL_STATE = { 
    isSignedIn: null,
    userId: null
}

export const auth = (state = INITIAL_STATE, action = { type: types.SIGN_IN }) => {
    switch (action.type) {
        case types.SIGN_IN:
           return { ...state, isSignedIn: true, userId: action.payload };
        case types.SIGN_OUT:
            return { ...state, isSignedIn: false, userId: null };
        default:
            return state;
    }
}