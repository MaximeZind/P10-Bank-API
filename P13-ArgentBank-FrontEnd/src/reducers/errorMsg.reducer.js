import { SET_ERROR_MSG, DELETE_ERROR_MSG } from "../actions/errorMsg.action";

const initialState = null;

export default function errorMsgReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ERROR_MSG:
            return action.payload;
        case DELETE_ERROR_MSG:
            return initialState;
        default:
            return state;
    }
}