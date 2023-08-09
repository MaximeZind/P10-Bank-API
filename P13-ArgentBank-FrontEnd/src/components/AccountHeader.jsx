import classes from '/src/styles/AccountHeader.module.css';
import PropTypes from 'prop-types';

function AccountHeader({accountType, accountNumber, currentBalance}) {

    return (
            <header className={classes.account_header}>
                <p className={classes.account}>{`Argent Bank ${accountType} (${accountNumber})`}</p>
                <strong className={classes.balance}>{`$${currentBalance}`}</strong>
                <p className={classes.available_balance}>Available Balance</p>
            </header>
    );
}

AccountHeader.propTypes = {
    accountType: PropTypes.string.isRequired,
    accountNumber: PropTypes.string.isRequired,
    currentBalance: PropTypes.number.isRequired,
}

export default AccountHeader;