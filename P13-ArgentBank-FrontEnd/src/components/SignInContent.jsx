import classes from '/src/styles/SignInContent.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import postSignIn from '../utils/postSignIn';

function SignInContent() {

    const handleSubmit = async event => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        try {
            const userDatas = await postSignIn(formJson.email, formJson.password);
            console.log(userDatas);
          } catch (error) {
            console.log(error);
          }
    }

    return (
        <section className={classes.sign_in_content}>
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className={classes.input_wrapper}>
                    <label htmlFor="email">Email</label><input type="text" id="email" name="email" />
                </div>
                <div className={classes.input_wrapper}>
                    <label htmlFor="password">Password</label><input type="password" id="password" name="password"/>
                </div>
                <div className={classes.input_remember}>
                    <input type="checkbox" id="remember-me" /><label htmlFor="remember-me">Remember me</label>
                </div>
                <button className={classes.sign_in_button} type='submit'>Sign In</button>
            </form>
        </section>
    );
}

export default SignInContent;