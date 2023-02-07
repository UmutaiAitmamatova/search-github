import React from 'react';
import classes from './Follow.module.scss'

function Follow({ name,  img }) {
  return (
    <div className={classes.user_follow}>
        <div>
          <img
            alt='AVATAR'
            src={img}
            className={classes.img}
          />
        </div>
        <div className={classes.nickname}>{name}</div>
    </div>
  )
}

export default Follow