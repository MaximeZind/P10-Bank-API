import classes from '/src/styles/AccountPage.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate, useParams } from 'react-router-dom';
import { getAccount } from '../utils/getAccountsDetails';
import AccountHeader from '../components/account/AccountHeader';
import Transactions from '../components/account/Transactions';

function Account() {

    const id = useParams().id;
    const account = getAccount(id);
    const userProfile = useSelector((state) => state.userReducer);

    if (userProfile.id === null) {
        return <Navigate to={'/'} />;
    }

    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle} - account ${account.accountNumber}`;

    return (
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <AccountHeader accountType={account.accountType} accountNumber={account.accountNumber} currentBalance={account.currentBalance}/>
            <Transactions transactions={account.transactions}/>
        </main>
    );
}

export default Account;