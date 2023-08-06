import classes from '/src/styles/AccountHeader.module.css';

function AccountHeader({accountType, accountNumber, currentBalance}) {

    return (
            <header className={classes.account_header}>
                <p>{`Argent Bank ${accountType} (${accountNumber})`}</p>
                <strong>{`${currentBalance}`}</strong>
                <p>Available Balance</p>
            </header>
    );
}

export default AccountHeader;