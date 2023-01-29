import React from 'react';
import UserInfo from '../UserInfo';
import classes from './MyPage.module.scss'

function MyPage() {
  return (
    <div className={classes.MyPage}>
        <div className={classes.container}>
            <UserInfo/>
        </div>
    </div>
  )
}

export default MyPage