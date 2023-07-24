import { GET_USER_PROFILE, SIGN_OUT, UPDATE_USER, SIGN_UP } from "../actions/user.action";

const initialState = {
    lastName: null,
    firstName: null,
    id: null,
    token: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return action.payload;
        case SIGN_OUT:
            return initialState;
        case SIGN_UP:
            return initialState;
        case UPDATE_USER:
            return action.payload;
        default:
            return state;
    }
}