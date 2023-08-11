// import { useNavigate } from 'react-router-dom';
import SignInContent from '../components/SignInContent';
import classes from '/src/styles/SignIn.module.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';

function SignIn() {

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const userProfile = useSelector((state) => state.userReducer);

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (userProfile.token){
    //         navigate('/userpage');
    //     } else if (!userProfile.token && token){
    //         const getToken = async () =>{
    //             await dispatch({type: GET_TOKEN, payload: token})
    //             navigate('/userpage');
    //         }
    //         getToken();
    //     }
    // });

    const pageTitle = `Sign in`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        <main className={classes.bg_dark}>
            <SignInContent />
        </main>
    );
}

export default SignIn;