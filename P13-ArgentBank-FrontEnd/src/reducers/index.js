import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";
import errorMsgReducer from "./errorMsg.reducer";

export default combineReducers({
    userReducer, errorMsgReducer
});