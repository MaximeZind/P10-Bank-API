import classes from '/src/styles/Accounts.module.css';
import AccountPreview from '../components/AccountPreview';


function Accounts({accounts}) {

    return (
        <section className={classes.accounts}>
            <h2 className={classes.sr_only}>Accounts</h2>
            {accounts.map((account) => {
                return <AccountPreview accountType={account.accountType} accountNumber={account.accountNumber} currentBalance={account.currentBalance} key={account.accountId} />
            })}
        </section>
    );
}

export default Accounts;