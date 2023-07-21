import axios from 'axios';

export const GET_USER_PROFILE = "GET_USER_PROFILE";
export const SIGN_OUT = "SIGN_OUT";

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
                return axios.post('http://localhost:3001/api/v1/user/profile', {},  header).then(response => {
                    const userDetails = response.data.body;
                    const userProfile = {
                        lastName: userDetails.lastName,
                        firstName: userDetails.firstName,
                        id: userDetails.id,
                    };
                    dispatch({ type: GET_USER_PROFILE, payload: userProfile });
                })
            }
        });
    };
};

export const signOut = () => {
    const initialState = {
        lastName: null,
        firstName: null,
        id: null,
    }
    return dispatch({ type: SIGN_OUT , initialState});
}