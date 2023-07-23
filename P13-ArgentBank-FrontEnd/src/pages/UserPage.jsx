import classes from '/src/styles/UserPage.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';
import Greetings from '../components/Greetings';
import { useDispatch } from 'react-redux';
import { deleteErrorMsg } from '../actions/errorMsg.action';

function UserPage() {

    const userProfile = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    dispatch(deleteErrorMsg());

    if (userProfile.id === null) {
        return <Navigate to={'/'} />;
    }

    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <Greetings firstName={userProfile.firstName} lastName={userProfile.lastName}/>
            <h2 className={classes.sr_only}>Accounts</h2>
            <section className={classes.account}>
                <div className={classes.account_content_wrapper}>
                    <h3 className={classes.account_title}>Argent Bank Checking (x8349)</h3>
                    <p className={classes.account_amount}>$2,082.79</p>
                    <p className={classes.account_amount_description}>Available Balance</p>
                </div>
                <div className={`${classes.account_content_wrapper} ${classes.cta}`}>
                    <button className={classes.transaction_button}>View transactions</button>
                </div>
            </section>
            <section className={classes.account}>
                <div className={classes.account_content_wrapper}>
                    <h3 className={classes.account_title}>Argent Bank Savings (x6712)</h3>
                    <p className={classes.account_amount}>$10,928.42</p>
                    <p className={classes.account_amount_description}>Available Balance</p>
                </div>
                <div className={`${classes.account_content_wrapper} ${classes.cta}`}>
                    <button className={classes.transaction_button}>View transactions</button>
                </div>
            </section>
            <section className={classes.account}>
                <div className={classes.account_content_wrapper}>
                    <h3 className={classes.account_title}>Argent Bank Credit Card (x8349)</h3>
                    <p className={classes.account_amount}>$184.30</p>
                    <p className={classes.account_amount_description}>Current Balance</p>
                </div>
                <div className={`${classes.account_content_wrapper} ${classes.cta}`}>
                    <button className={classes.transaction_button}>View transactions</button>
                </div>
            </section>
        </main>
    );
}

export default UserPage;