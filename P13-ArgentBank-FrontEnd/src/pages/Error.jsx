import React from 'react';
import classes from '../styles/Error.module.css';

function Error() {

    const pageTitle = 'Erreur 404';
    document.title = `Kasa - ${pageTitle}`;
    const errorText = `The page you are requesting does not exist.`;
    const linkText = `Return to the homepage`;
    

    return (
        <div className={classes.error404}>
            <h1>
                404
            </h1>
            <p>
                {errorText}
            </p>
            <a href="/">{linkText}</a>
        </div>
    );
}

export default Error;