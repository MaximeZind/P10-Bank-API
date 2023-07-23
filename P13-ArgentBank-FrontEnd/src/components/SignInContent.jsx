import classes from '/src/styles/SignInContent.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile } from '../actions/user.action';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { validateEmail } from '../utils/formValidation';


function SignInContent() {

    const userProfile = useSelector((state) => state.userReducer);
    const errorMsg = useSelector((state) => state.errorMsgReducer);
    const [wrongEmailMsg, setWrongEmailMsg] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const isEmailCorrect = validateEmail(formJson.email);
        if (isEmailCorrect.response) {
            dispatch(getUserProfile(formJson));
            setWrongEmailMsg(null);
        } else if (!isEmailCorrect.response){
            setWrongEmailMsg(isEmailCorrect.errorMsg);
        }
    }

    useEffect(() => {
        if (userProfile.id !== null) {
            navigate('/userpage');
        }
    }, [userProfile, navigate]);

    return (
        <section className={classes.sign_in_content}>
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.input_wrapper}>
                    <label htmlFor="email">Email</label><input type="text" id="email" name="email" />
                    {wrongEmailMsg? <p className={classes.error_msg}>{wrongEmailMsg}</p> : null}
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="password">Password</label><input type="password" id="password" name="password" />
                </div>
                {errorMsg ? <p className={classes.error_msg}>{errorMsg}</p> : null}
                <div className={classes.input_remember}>
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className={classes.sign_in_button} type='submit'>Sign In</button>
            </form>
        </section>
    );
}

export default SignInContent;