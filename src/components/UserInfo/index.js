import React from 'react';
import classes from './UserInfo.module.scss';

function UserInfo() {
  return (
    <div className={classes.UserInfo}>
        <div className={classes.img}></div>
        <div className={classes.nickname}>Umutai</div>
        <div className={classes.fullname}>UmutaiAitmamatova</div>
        <div className={classes.follow}>
            <div className={classes.followers}> <span>4</span> followers</div>
            <div className={classes.following}> <span>9</span> following</div>
        </div>

    </div>
  )
}

export default UserInfo