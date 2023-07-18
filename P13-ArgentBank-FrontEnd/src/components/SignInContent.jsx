import classes from '/src/styles/SignInContent.module.css';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SignInContent() {

    return (
        <section className={classes.sign_in_content}>
            <FontAwesomeIcon icon={faUserCircle} />
            <h1>Sign In</h1>
            <form>
                <div className={classes.input_wrapper}>
                    <label for="username">Username</label><input type="text" id="username" />
                </div>
                <div className={classes.input_wrapper}>
                    <label for="password">Password</label><input type="password" id="password" />
                </div>
                <div className={classes.input_remember}>
                    <input type="checkbox" id="remember-me" /><label for="remember-me">Remember me</label>
                </div>
                <button className={classes.sign_in_button}>Sign In</button>
            </form>
        </section>
    );
}

export default SignInContent;