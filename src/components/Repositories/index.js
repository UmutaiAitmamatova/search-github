import React from 'react';
import classes from './Repositories.module.scss';

function Repositories({ language, title }) {
  return (
    <div className={classes.repositories}>
        <p className={classes.title}>{title}</p>
        <p className={classes.language}>{language}</p>
    </div>
  )
}

export default Repositories;