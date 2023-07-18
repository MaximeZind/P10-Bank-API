import SignInContent from '../components/SignInContent';
import classes from '/src/styles/SignIn.module.css';

function SignIn() {

    return (
        <main className={classes.bg_dark}>
            <SignInContent />
        </main>
    );
}

export default SignIn;