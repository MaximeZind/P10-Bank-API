import classes from '../styles/nav.module.css';
import logo from '/src/assets/argentBankLogo.png';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

library.add(faUserCircle);
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
                    Sign In
                </a>
            </div>
        </nav>
    );
}

export default Nav;