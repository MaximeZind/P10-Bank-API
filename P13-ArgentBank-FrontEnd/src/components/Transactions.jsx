import classes from '/src/styles/Transactions.module.css';

function Transaction({ transactions }) {

    return (
        <section className={classes.transactions_section}>
            {transactions.map((transaction) => {
                return <Transaction id={transaction.id} date={transaction.date} description={transaction.description} amount={transaction.amount} balance={transaction.balance}/>
            })}
        </section>
    );
}

export default Transaction;