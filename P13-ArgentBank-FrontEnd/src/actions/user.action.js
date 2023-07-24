import axios from 'axios';
import { SET_ERROR_MSG } from './errorMsg.action';

export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const SIGN_OUT = "SIGN_OUT";
export const SIGN_UP = "SIGN_UP";
export const UPDATE_USER = "UPDATE_USER";

export const getUserProfile = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then(res => {
            const token = res.data.body.token;
            if (token) {
                const header = {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                }
                return axios.post('http://localhost:3001/api/v1/user/profile', {}, header).then(response => {
                    const userDetails = response.data.body;
                    const userProfile = {
                        lastName: userDetails.lastName,
                        firstName: userDetails.firstName,
                        id: userDetails.id,
                        token: token,
                    };
                    dispatch({ type: GET_USER_PROFILE, payload: userProfile });
                })
            }
        }).catch((error) => {
            dispatch({ type: SET_ERROR_MSG, payload: error.response.data.message });
            return error;
        });
    };
};

export const signOut = () => {
    return (dispatch) => {
        dispatch({ type: SIGN_OUT });
    }
}

export const signUp = (data) => {
    return (dispatch) => {
        return axios.post('http://localhost:3001/api/v1/user/signup', data).then(response => {
            console.log(response);
            dispatch({ type: SIGN_UP });
        }).catch((error) => {
            console.log(error);
            dispatch({ type: SET_ERROR_MSG, payload: error.response.data.message });
            return error;
        })
    }
}

export const updateUser = (data, token) => {
    const header = {
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }
    return (dispatch) => {
        return axios.put("http://localhost:3001/api/v1/user/profile", data, header).then(res => {
            const userDetails = res.data.body;
            const userProfile = {
                lastName: userDetails.lastName,
                firstName: userDetails.firstName,
                id: userDetails.id,
                token: token,
            };
            dispatch({ type: UPDATE_USER, payload: userProfile });
        });
    };
};