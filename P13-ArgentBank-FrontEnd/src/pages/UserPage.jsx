import classes from '/src/styles/UserPage.module.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Greetings from '../components/Greetings';
import { getAccounts } from '../utils/getAccountsDetails';
import AccountPreview from '../components/AccountPreview';
import { useEffect } from 'react';
import { getUserProfile } from '../actions/user.action';
import { useDispatch } from 'react-redux';
import { GET_TOKEN } from '../actions/token.action';

function UserPage() {

    const userToken = useSelector((state) => state.tokenReducer);
    const userProfile = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const token = localStorage.getItem('token');

    if (userToken === null && token === null) {
        return <Navigate to={'/'} />;
    }

    useEffect(() => {
        const getProfile = async () => {
            if (userToken) {
                await dispatch(getUserProfile(userToken));
            } else if (!userToken && token) {
                await dispatch({ type: GET_TOKEN, payload: token });
                await dispatch(getUserProfile(token));
            }
        }
        getProfile();
    }, [userToken, token]);

    const accounts = getAccounts();
    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        userProfile.id && 
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <Greetings firstName={userProfile.firstName} lastName={userProfile.lastName} />
            <h2 className={classes.sr_only}>Accounts</h2>
            {accounts.map((account) => {
                return <AccountPreview accountType={account.accountType} accountNumber={account.accountNumber} currentBalance={account.currentBalance} key={account.accountId} />
            })}
        </main>
    );
}

export default UserPage;