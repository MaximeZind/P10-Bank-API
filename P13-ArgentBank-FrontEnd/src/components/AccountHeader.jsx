import classes from '/src/styles/AccountHeader.module.css';

function AccountHeader({accountType, accountNumber, currentBalance}) {

    return (
            <header className={classes.account_header}>
                <p className={classes.account}>{`Argent Bank ${accountType} (${accountNumber})`}</p>
                <strong className={classes.balance}>{`$${currentBalance}`}</strong>
                <p className={classes.available_balance}>Available Balance</p>
            </header>
    );
}

export default AccountHeader;