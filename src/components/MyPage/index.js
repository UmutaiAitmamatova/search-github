import React from 'react';
import Filters from '../Filters';
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
                  <Filters/>
                  <Repositories title='mypage' language='HTML'/>
                  <Repositories title='search-github' language='JavaScript'/>
                  <Repositories title='todo-system' language='JavaScript'/>
                  <Repositories title='admin-panel' language='JavaScript'/>
                </div>
            </div>
        </div>

    </div>
  )
}

export default MyPage