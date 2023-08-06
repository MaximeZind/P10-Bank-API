import classes from '/src/styles/Account.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate, useParams } from 'react-router-dom';
import { getAccount } from '../utils/getAccountsDetails';

function Account() {

    const id = useParams().id;
    console.log(id);
    const account = getAccount(id);
    console.log(account);
    const userProfile = useSelector((state) => state.userReducer);

    if (userProfile.id === null) {
        return <Navigate to={'/'} />;
    }

    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <header className={classes.account_header}>
                <p>Argent Bank</p>
            </header>
        </main>
    );
}

export default Account;