import classes from '/src/styles/UserPage.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate } from 'react-router-dom';
import Greetings from '../components/Greetings';
import { getAccounts } from '../utils/getAccountsDetails';
import AccountPreview from '../components/AccountPreview';

function UserPage() {

    const userProfile = useSelector((state) => state.userReducer);

    if (userProfile.id === null) {
        return <Navigate to={'/'} />;
    }

    const accounts = getAccounts();
    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <Greetings firstName={userProfile.firstName} lastName={userProfile.lastName}/>
            <h2 className={classes.sr_only}>Accounts</h2>
            {accounts.map((account) => {
                return <AccountPreview accountType={account.accountType} accountNumber={account.accountNumber} currentBalance={account.currentBalance} key={account.accountId}/>
            })}
        </main>
    );
}

export default UserPage;