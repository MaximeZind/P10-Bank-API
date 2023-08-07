import classes from '/src/styles/Transaction.module.css';
import { faChevronDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useRef } from 'react';

function Transaction({ date, description, amount, balance, transactionType, category, notes }) {

    const [isOpen, setIsOpen] = useState(false);
    const [categoryForm, setCategoryForm] = useState(false);
    const [noteForm, setNoteForm] = useState(false);
    const collapseContent = useRef(null);

    const handleNoteChange = async (event) => {
        event.preventDefault();
        //modifie les notes
    };

    const handleCategoryChange = async (event) => {
        event.preventDefault();
        //modifie la catégorie
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
                            <input className={classes.category_change_input} type="text" id="category" name="category" placeholder={category} />
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

export default Transaction;