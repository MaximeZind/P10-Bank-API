import { GET_USER_PROFILE, SIGN_OUT } from "../actions/user.action";

const initialState = {
    lastName: null,
    firstName: null,
    id: null,
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return action.payload;
        case SIGN_OUT:
            console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}