import React, { useEffect } from "react";
import { Outlet } from 'react-router-dom'
import classes from "./MyPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserReposThunk, userInfoThunk } from "../../api/UserInfo/user.thunk";
import UserInfo from "../UserInfo";
import { Link } from "react-router-dom";
import { RiGitRepositoryLine } from 'react-icons/ri'
import { AiOutlineStar } from 'react-icons/ai'
import { SlUserFollowing } from 'react-icons/sl'

const MyPage = () => {
  const { userInfoo } = useSelector((state) => state.userInfo);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfoThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getUserReposThunk());
  }, [dispatch]);


  return (
    <div className={classes.MyPage}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.right}>
            <UserInfo userInfoo={userInfoo} />
          </div>

          <div className={classes.left}>
            <div className={classes.page}>
              <Link to='repos'><div className={classes.repositories}><RiGitRepositoryLine/>Repositories</div></Link>
              <Link to='star'><div className={classes.repositories}><AiOutlineStar/>Star</div></Link>
              <Link to='following'><div className={classes.repositories}><SlUserFollowing/>following</div></Link>
              <Link to='follower'><div className={classes.repositories}><SlUserFollowing/>follower</div></Link>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
