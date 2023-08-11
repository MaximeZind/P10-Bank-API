import classes from '/src/styles/SignInContent.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
// import { getUserProfile } from '../actions/user.action';
import { getToken } from '../actions/token.action';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { validateEmail } from '../utils/formValidation';
import { GET_TOKEN } from '../actions/token.action';

function SignInContent() {

    const userToken = useSelector((state) => state.tokenReducer);
    const [errorMsg, setErrorMsg] = useState(null);
    const [wrongEmailMsg, setWrongEmailMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMsg(null);
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const isEmailCorrect = validateEmail(formJson.email);
        if (isEmailCorrect.response) {
            await dispatch(getToken(formJson)).catch((error) => setErrorMsg(error.response.data.message));
            setWrongEmailMsg(null);
            handleRememberMe(formJson.rememberme);
        } else if (!isEmailCorrect.response) {
            setWrongEmailMsg(isEmailCorrect.errorMsg);
        }
    }

    function handleRememberMe(rememberme) {
        if (rememberme) {
            console.log(`Rememberme: ${rememberme}`);
        }
    }

    //Si le profil utilisateur existe, renvoie vers la page de profil
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (userToken){
            navigate('/userpage');
        } else if (!userToken && token){
            const getToken = async () =>{
                await dispatch({type: GET_TOKEN, payload: token})
                navigate('/userpage');
            }
            getToken();
        }
    });

    return (
        <section className={classes.sign_in_content}>
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.input_wrapper}>
                    <label htmlFor="email">Email</label><input type="text" id="email" name="email" />
                    {wrongEmailMsg ? <p className={classes.error_msg}>{wrongEmailMsg}</p> : null}
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="password">Password</label><input type="password" id="password" name="password" />
                </div>
                {errorMsg ? <p className={classes.error_msg}>{errorMsg}</p> : null}
                <div className={classes.input_remember}>
                    <input type="checkbox" id="rememberme" name="rememberme" /><label htmlFor="rememberme">Remember me</label>
                </div>
                <button className={classes.sign_in_button} type='submit'>Sign In</button>
            </form>
            <div className={classes.signup}>
                <p>Don’t have an account? </p>
                <Link to={"/signup"}>Sign up</Link>
            </div>
        </section>
    );
}

export default SignInContent;