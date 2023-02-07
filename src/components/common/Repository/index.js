import React from 'react';
import classes from './Repository.module.scss';

function Repository({ repos }) {
  return (
    <div className={classes.repositories}>
        <div>
          <p className={classes.title}>{repos.name}</p>
          <p className={classes.language}>{repos.language}</p>
        </div>
        <div>
          <p className={classes.visibility}>{repos.visibility}</p>
          <p className={classes.language}>{repos.updated_at}</p>
        </div>
    </div>
  )
}

export default Repository;