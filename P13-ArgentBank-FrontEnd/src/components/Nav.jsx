import classes from '../styles/Nav.module.css';
import logo from '/src/assets/argentBankLogo.png';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {

    return (
        <nav className={classes.main_nav}>
            <a className={classes.main_nav_logo} href="./index.html">
                <img className={classes.main_nav_logo_image}
                    src={logo}
                    alt="Argent Bank Logo"
                />
                <h1 className={classes.sr_only}>Argent Bank</h1>
            </a>
            <div>
                <a className={classes.main_nav_item} href="./sign-in.html">
                <FontAwesomeIcon icon={faUserCircle} />
                <p>Sign In</p>
                </a>
            </div>
        </nav>
    );
}

export default Nav;