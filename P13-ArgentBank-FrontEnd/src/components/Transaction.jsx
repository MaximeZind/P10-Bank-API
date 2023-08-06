import classes from '/src/styles/Transaction.module.css';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Transaction({ date, description, amount, balance }) {

    return (
        <section>
            <div className={classes.date}>
                <FontAwesomeIcon icon={faChevronDown} />
                <p>{date}</p>
            </div>
            <p className={classes.description}>{description}</p>
            <p className={classes.amount}>{amount}</p>
            <p className={classes.balance}>{balance}</p>
        </section>
    );
}

export default Transaction;