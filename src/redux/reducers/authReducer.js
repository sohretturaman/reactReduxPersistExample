
//const INITIAL_STATE = {user: null, token: null};

const INITIAL_STATE = {user: null};
const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload};
        case 'REGISTER':
            return {...state, user: action.payload};
        default:
            return state;
    }
};
export default authReducer