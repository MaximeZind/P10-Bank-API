import classes from '/src/styles/Account.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { Navigate, useParams } from 'react-router-dom';
import accounts from '../mockedData/transactions.json';

function Account() {

    const id = useParams();
    console.log(id);
    console.log(accounts);
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