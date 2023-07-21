import classes from '/src/styles/Greetings.module.css';

function Greetings({firstName, lastName}) {

    return (
        <div className={classes.header}>
            <h1>Welcome back<br />{`${firstName} ${lastName}`}</h1>
            <button className={classes.edit_button}>Edit Name</button>
        </div>
    );
}

export default Greetings;