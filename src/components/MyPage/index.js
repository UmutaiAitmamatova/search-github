import React from 'react';
import Repositories from '../Repositories';
import UserInfo from '../UserInfo';
import classes from './MyPage.module.scss'

function MyPage() {
  return (
    <div className={classes.MyPage}>
        <div className={classes.container}>
            <div className={classes.content}>
                <div className={classes.right}>
                    <UserInfo/>
                </div>

                <div className={classes.left}>
                  <h2>Repositories</h2>
                  
                  <Repositories/>
                  <Repositories/>
                  <Repositories/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MyPage