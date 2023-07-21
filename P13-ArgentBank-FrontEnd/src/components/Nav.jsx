import classes from '../styles/Nav.module.css';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/argentBankLogo.png';
import { faUserCircle, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { signOut } from '../actions/user.action';

function Nav() {

    const dispatch = useDispatch();
    const userProfile = useSelector((state) => state.userReducer);
    console.log(userProfile);

    const handleSignOut = () => {
        dispatch(signOut());
    }

    return (
        <nav className={classes.main_nav}>
            <NavLink className={classes.main_nav_logo} to="/">
                <img className={classes.main_nav_logo_image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </NavLink>
            <h1 className={classes.sr_only}>Argent Bank</h1>
            {userProfile.id === null ?
                <NavLink className={classes.main_nav_item} to="/signin">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>Sign In</p>
                </NavLink> :
                <div className={classes.main_nav_right}>
                    <NavLink className={classes.main_nav_item} to="/userpage">
                    <FontAwesomeIcon icon={faUserCircle} />
                        <p>{`${userProfile.firstName}`}</p>
                    </NavLink>
                    <NavLink className={classes.main_nav_item} to="/" onClick={handleSignOut}>
                        <FontAwesomeIcon icon={faArrowRightFromBracket} />
                        <p>Sign Out</p>
                    </NavLink>
                </div>
            }
        </nav>
    );
}

export default Nav;