import React from 'react';
import classes from './Repository.module.scss';

function Repository({ name, language, updated_at, visibility }) {
  return (
    <div className={classes.repositories}>
        <div>
          <p className={classes.title}>{name}</p>
          <p className={classes.language}>{language}</p>
        </div>
        <div>
          <p className={classes.visibility}>{visibility}</p>
          <p className={classes.language}>{updated_at}</p>
        </div>
    </div>
  )
}

export default Repository;