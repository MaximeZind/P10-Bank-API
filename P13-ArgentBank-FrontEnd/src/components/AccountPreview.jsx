import { Link } from 'react-router-dom';
import classes from '/src/styles/AccountPreview.module.css';
import PropTypes from 'prop-types';

function AccountPreview({ accountType, accountNumber, currentBalance, }) {

    return (
        <section className={classes.account}>
            <div className={classes.account_content_wrapper}>
                <h3 className={classes.account_title}>{`Argent Bank ${accountType} (${accountNumber})`}</h3>
                <p className={classes.account_amount}>{`$${currentBalance}`}</p>
                <p className={classes.account_amount_description}>Available Balance</p>
            </div>
            <div className={`${classes.account_content_wrapper} ${classes.cta}`}>
                <Link to={`/userpage/account/${accountNumber}`}>
                    <button className={classes.transaction_button}>View transactions</button>
                </Link>
            </div>
        </section>
    );
}

AccountPreview.propTypes = {
    accountType: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    currentBalance: PropTypes.number.isRequired,
}

export default AccountPreview;