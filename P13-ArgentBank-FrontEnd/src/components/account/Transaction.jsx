import classes from '/src/styles/Transaction.module.css';
import { faChevronDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

function Transaction({ date, description, amount, balance, transactionType, category, notes }) {

    const [isOpen, setIsOpen] = useState(false);
    const [categoryForm, setCategoryForm] = useState(false);
    const [noteForm, setNoteForm] = useState(false);
    const collapseContent = useRef(null);
    const categoryList = ['Food', 'Groceries', 'Utilities', 'Rent', 'Entertainment', 'Healthcare'];

    const handleNoteChange = async (event) => {
        event.preventDefault();
        //modifie les notes
        setNoteForm(false);
    };

    const handleCategoryChange = async (event) => {
        event.preventDefault();
        //modifie la catégorie
        setCategoryForm(false);
    };

    return (
        <section className={classes.transaction_section}>
            <header className={classes.transaction_section_header} onClick={() => setIsOpen(!isOpen)}>
                <div className={classes.date}>
                    <FontAwesomeIcon icon={faChevronDown} style={{ transform: isOpen && 'rotate(180deg)' }} />
                    <p>{date}</p>
                </div>
                <p className={classes.description}>{description}</p>
                <p className={classes.amount}>{`$${amount}`}</p>
                <p className={classes.balance}>{`$${balance}`}</p>
            </header>
            <div className={classes.content} ref={collapseContent} style={{ maxHeight: isOpen ? `${collapseContent.current.scrollHeight}px` : `0px` }}>
                <p className={classes.content_sub}>Transaction type: {transactionType}</p>

                {categoryForm ?
                    <div className={classes.content_sub}>
                        <p>Category:</p>
                        <form onSubmit={handleCategoryChange} className={classes.form}>
                            <select className={classes.category_change_input} id="category" name="category" placeholder={category}>
                                {categoryList.map((category) => {
                                return <option value={category} key={category}>{category}</option>
                                })
                                }
                            </select>
                            <button>Save</button>
                        </form>
                        <button onClick={() => setCategoryForm(false)}>Cancel</button>
                    </div> :
                    <div className={classes.content_sub}>
                        <p>Category: {category}</p>
                        <FontAwesomeIcon icon={faPencil} className={classes.content_sub_icon} onClick={() => setCategoryForm(true)}/>
                    </div>
                }
                {noteForm ?
                    <div className={classes.content_sub}>
                        <p>Notes:</p>
                        <form onSubmit={handleNoteChange} className={classes.form}>
                            <input className={classes.notes_change_input} type="text" id="notes" name="notes" placeholder="" />
                            <button>Save</button>
                        </form>
                        <button onClick={() => setNoteForm(false)} >Cancel</button>
                    </div> :
                    <div className={classes.content_sub}>
                        <p>Notes: {notes}</p>
                        <FontAwesomeIcon icon={faPencil} className={classes.content_sub_icon} onClick={() => setNoteForm(true)}/>
                    </div>
                }
            </div>
        </section>
    );
}

Transaction.propTypes = {
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    balance: PropTypes.number.isRequired,
    transactionType: PropTypes.string.isRequired,
    category: PropTypes.string,
    notes: PropTypes.string,
}

export default Transaction;