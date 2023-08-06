import { useNavigate } from 'react-router-dom';
import classes from '/src/styles/AccountPreview.module.css';

function AccountPreview({ accountType, accountNumber, currentBalance, }) {

    const navigate = useNavigate();

    return (
        <section className={classes.account}>
            <div className={classes.account_content_wrapper}>
                <h3 className={classes.account_title}>{`Argent Bank ${accountType} (${accountNumber})`}</h3>
                <p className={classes.account_amount}>{`${currentBalance}`}</p>
                <p className={classes.account_amount_description}>Available Balance</p>
            </div>
            <div className={`${classes.account_content_wrapper} ${classes.cta}`}>
                <button className={classes.transaction_button} onClick={navigate(`/userpage/account/${accountNumber}`)}>View transactions</button>
            </div>
        </section>
    );
}

export default AccountPreview;