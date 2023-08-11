import { GET_TOKEN, DELETE_TOKEN } from "../actions/token.action";

const initialState = null;

export default function tokenReducer(state = initialState, action) {
    switch (action.type) {
        case GET_TOKEN:
            return action.payload;
        case DELETE_TOKEN:
            return initialState;
        default:
            return state;
    }
}