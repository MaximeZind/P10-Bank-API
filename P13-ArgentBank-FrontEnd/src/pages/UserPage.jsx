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
    const localStorageToken = localStorage.getItem('token');
    const sessionStorageToken = sessionStorage.getItem('token');

    if (userToken === null && localStorageToken === null && sessionStorageToken === null) {
        return <Navigate to={'/'} />;
    }

    useEffect(() => {
        const getProfile = async () => {
            if (userToken) {
                await dispatch(getUserProfile(userToken));
            } else if (!userToken && localStorageToken) {
                await dispatch({ type: GET_TOKEN, payload: localStorageToken });
                await dispatch(getUserProfile(localStorageToken));
            } else if (userToken && !localStorageToken && sessionStorageToken){
                await dispatch({ type: GET_TOKEN, payload: sessionStorageToken });
                await dispatch(getUserProfile(sessionStorageToken));
            }
        }
        getProfile();
    }, [userToken, localStorageToken, sessionStorageToken]);

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