import SignUpContent from '../components/SignUpContent';
import classes from '/src/styles/SignUp.module.css';

function SignUp() {

    const pageTitle = `Sign up`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        <main className={classes.bg_dark}>
            <SignUpContent />
        </main>
    );
}

export default SignUp;