import classes from '../styles/heroBanner.module.css';
// import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function HeroBanner() {

    return (
        <div className={classes.hero}>
            <section className={classes.hero_content}>
                <h2 className={classes.sr_only}>Promoted Content</h2>
                <p className={classes.subtitle}>No fees.</p>
                <p className={classes.subtitle}>No minimum deposit.</p>
                <p className={classes.subtitle}>High interest rates.</p>
                <p className={classes.text}>Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    );
}

export default HeroBanner;