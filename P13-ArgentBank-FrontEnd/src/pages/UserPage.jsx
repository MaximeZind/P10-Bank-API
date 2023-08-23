import classes from '/src/styles/UserPage.module.css';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Greetings from '../components/Greetings';
import { getAccounts } from '../utils/getAccountsDetails';
import { useEffect } from 'react';
import { getUserProfile } from '../actions/user.action';
import { useDispatch } from 'react-redux';
import { GET_TOKEN } from '../actions/token.action';
import Accounts from '../components/Accounts';

function UserPage() {

    const accounts = getAccounts();
    const userToken = useSelector((state) => state.tokenReducer);
    const userProfile = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();
    const localStorageToken = localStorage.getItem('token');
    const sessionStorageToken = sessionStorage.getItem('token');

    // Si pas de token (utilisateur non connecté), on redirige l'utilisateur vers la page d'accueil
    if (userToken === null && localStorageToken === null && sessionStorageToken === null) {
        return <Navigate to={'/'} />;
    }

    //Récupération du userProfile en utilisant le token
    useEffect(() => {
        const getProfile = async () => {
            if (userToken) {
                await dispatch(getUserProfile(userToken));
            } else if (!userToken && localStorageToken) {
                await dispatch({ type: GET_TOKEN, payload: localStorageToken });
                await dispatch(getUserProfile(localStorageToken));
            } else if (!userToken && !localStorageToken && sessionStorageToken){
                await dispatch({ type: GET_TOKEN, payload: sessionStorageToken });
                await dispatch(getUserProfile(sessionStorageToken));
            }
        }
        getProfile();
    }, [userToken, localStorageToken, sessionStorageToken]);

    const pageTitle = `${userProfile.firstName} ${userProfile.lastName}`;
    document.title = `Argent Bank - ${pageTitle}`;

    return (
        userProfile.id && 
        <main className={`${classes.main} ${classes.bg_dark}`}>
            <Greetings firstName={userProfile.firstName} lastName={userProfile.lastName} />
            <Accounts accounts={accounts}/>
        </main>
    );
}

export default UserPage;