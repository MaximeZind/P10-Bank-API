import classes from '/src/styles/Transactions.module.css';
import Transaction from './Transaction';

function Transactions({ transactions }) {

    return (
        <section className={classes.transactions_section}>
            {transactions.map((transaction) => {
                return <Transaction key={transaction.id} date={transaction.date} description={transaction.description} amount={transaction.amount} balance={transaction.balance} transactionType={transaction.transactionType} category={transaction.category} notes={transaction.notes} />
            })}
        </section>
    );
}

export default Transactions;