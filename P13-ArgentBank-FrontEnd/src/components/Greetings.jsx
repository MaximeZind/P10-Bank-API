import classes from '/src/styles/Greetings.module.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../actions/user.action';

function Greetings({ firstName, lastName }) {

    const dispatch = useDispatch();
    const [isOpen, setOpenClose] = useState(false);
    const userProfile = useSelector((state) => state.userReducer);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const formJson = Object.fromEntries(formData.entries());
        dispatch(updateUser(formJson, userProfile.token));
        setOpenClose(!isOpen);
    };

    return (
        <div className={classes.header}>
            <h1>Welcome back<br />{!isOpen && `${firstName} ${lastName}`}</h1>
            {
                !isOpen ?
                    <button onClick={() => setOpenClose(!isOpen)} className={classes.edit_button} >Edit Name</button> :
                    <form className={classes.name_change_form} onSubmit={handleSubmit}>
                        <div className={classes.inputs_wrapper}>
                            <input className={classes.name_change_input} type="text" id="firstName" name="firstName" placeholder={userProfile.firstName} />
                            <input className={classes.name_change_input} type="text" id="lastName" name="lastName" placeholder={userProfile.lastName} />
                        </div>
                        <div className={classes.buttons_wrapper}>
                            <button className={classes.edit_button} type='submit'>Save</button>
                            <button className={classes.edit_button} onClick={() => setOpenClose(!isOpen)} >Cancel</button>
                        </div>
                    </form>
            }
        </div>
    );
}

export default Greetings;