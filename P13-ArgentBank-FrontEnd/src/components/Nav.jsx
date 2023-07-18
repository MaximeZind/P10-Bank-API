import classes from '../styles/Nav.module.css';
import { NavLink } from 'react-router-dom';
import logo from '/src/assets/argentBankLogo.png';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {

    return (
        <nav className={classes.main_nav}>
            <NavLink className={classes.main_nav_logo} to="/">
                <img className={classes.main_nav_logo_image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
            </NavLink>
            <h1 className={classes.sr_only}>Argent Bank</h1>

            <div>
                <NavLink className={classes.main_nav_item} to="/signin">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <p>Sign In</p>
                </NavLink>
            </div>
        </nav>
    );
}

export default Nav;