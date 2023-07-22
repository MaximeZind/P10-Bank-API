import React from 'react';
import classes from '../styles/Error.module.css';

function Error() {

    const pageTitle = 'Erreur 404';
    document.title = `Kasa - ${pageTitle}`;
    const errorText = `Oups! La page que vous demandez n'existe pas.`;
    const linkText = `Retourner sur la page d'accueil`;

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