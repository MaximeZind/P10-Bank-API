import classes from '/src/styles/SignUpContent.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { signUp } from '../actions/user.action';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { validateEmail, validateName, validatePassword } from '../utils/formValidation';

function SignInContent() {

    const userProfile = useSelector((state) => state.userReducer);

    const [wrongEmailMsg, setWrongEmailMsg] = useState(null);
    const [wrongPasswordMsg, setWrongPasswordMsg] = useState(null);
    const [wrongFirstNameMsg, setWrongFirstNameMsg] = useState(null);
    const [wrongLastNameMsg, setWrongLastNameMsg] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        const isEmailCorrect = validateEmail(formJson.email);
        const isPasswordCorrect = validatePassword(formJson.password)
        const isFirstNameCorrect = validateName(formJson.firstName);
        const isLastNameCorrect = validateName(formJson.lastName);
        if (isEmailCorrect.response && isFirstNameCorrect.response && isLastNameCorrect.response && isPasswordCorrect.response) {
            await dispatch(signUp(formJson)).catch((error) => setErrorMsg(error.response.data.message));
            setWrongEmailMsg(null);
            setWrongFirstNameMsg(null);
            setWrongLastNameMsg(null);
            setWrongPasswordMsg(null);
            if (errorMsg === null){
                form.reset();
            }
        } else if (!isEmailCorrect.response || !isFirstNameCorrect.response || !isLastNameCorrect.response || !isPasswordCorrect.response) {
            setWrongEmailMsg(isEmailCorrect.errorMsg);
            setWrongFirstNameMsg(isFirstNameCorrect.errorMsg);
            setWrongLastNameMsg(isLastNameCorrect.errorMsg);
            setWrongPasswordMsg(isPasswordCorrect.errorMsg);
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
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.input_wrapper}>
                    <label htmlFor="email">Email</label><input type="text" id="email" name="email" />
                    {wrongEmailMsg ? <p className={classes.error_msg}>{wrongEmailMsg}</p> : null}
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="password">Password</label><input type="password" id="password" name="password" />
                    {wrongPasswordMsg ? <p className={classes.error_msg}>{wrongPasswordMsg}</p> : null}
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="firstName">First name</label><input type="text" id="firstName" name="firstName" />
                    {wrongFirstNameMsg ? <p className={classes.error_msg}>{wrongFirstNameMsg}</p> : null}
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="lastName">Last name</label><input type="text" id="lastName" name="lastName" />
                    {wrongLastNameMsg ? <p className={classes.error_msg}>{wrongLastNameMsg}</p> : null}
                </div>
                {errorMsg ? <p className={classes.error_msg}>{errorMsg}</p> : null}
                <button className={classes.sign_up_button} type='submit'>Sign Up</button>
            </form>
        </section>
    );
}

export default SignInContent;