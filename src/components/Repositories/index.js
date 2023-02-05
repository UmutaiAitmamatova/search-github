import React from 'react';
import classes from './Repositories.module.scss';

function Repositories({ repos }) {
  return (
    <div className={classes.repositories}>
        <p className={classes.title}>{repos.name}</p>
        <p className={classes.language}>{repos.language}</p>
    </div>
  )
}

export default Repositories;