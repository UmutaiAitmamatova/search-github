import React from 'react';
import classes from './Repository.module.scss';

function Repository({ repos }) {
  return (
    <div className={classes.repositories}>
        <p className={classes.title}>{repos.name}</p>
        <p className={classes.language}>{repos.language}</p>
    </div>
  )
}

export default Repository;