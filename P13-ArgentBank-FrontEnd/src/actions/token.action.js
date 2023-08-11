import axios from 'axios';
export const GET_TOKEN = "GET_TOKEN";
export const DELETE_TOKEN = "DELETE_TOKEN";

export const getToken = (data) => {
    return (dispatch) => {
        return axios.post("http://localhost:3001/api/v1/user/login", data).then(res => {
            if (res.data.status === 200) {
                const token = res.data.body.token;
                if (data.rememberme === 'on') {
                    localStorage.setItem("token", token);
                } else if (!data.rememberme) {
                    sessionStorage.setItem("token", token);
                }
                dispatch({ type: GET_TOKEN, payload: token })
            }
        }).catch((error) => {
            throw error;
        });
    };
};

export const deleteToken = () => {
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    return (dispatch) => {
        dispatch({ type: DELETE_TOKEN });
    }
}