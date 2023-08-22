import classes from '/src/styles/Transactions.module.css';
import Transaction from './Transaction';
import PropTypes from 'prop-types';

function Transactions({ transactions }) {

    return (
        <section className={classes.transactions_section}>
            {transactions.map((transaction) => {
                return <Transaction key={transaction.id} date={transaction.date} description={transaction.description} amount={transaction.amount} balance={transaction.balance} transactionType={transaction.transactionType} category={transaction.category} notes={transaction.notes} />
            })}
        </section>
    );
}

Transactions.propTypes = {
    transactions: PropTypes.arrayOf(
        PropTypes.shape({
            date: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            balance: PropTypes.number.isRequired,
            transactionType: PropTypes.string.isRequired,
            category: PropTypes.string,
            notes: PropTypes.string,
        })
    ).isRequired,
}

export default Transactions;