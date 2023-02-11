import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import classes from "./UsersPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersThunk,
} from "../../api/UserInfo/user.thunk";
import UserInfo from "../UserInfo";
import { Link } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
// import { selectUserData } from "../../api/SearchUsers/searchSlice";
import { selectLoading, selectUserInfo } from "../../api/SearchUsers/userInfoSlice";

const UsersPage = () => {
  const dispatch = useDispatch();
  dispatch(selectUserInfo());
  const userInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectLoading);

  if (loading) return <p>Loading...</p>;
  console.log('userInfo', userInfo);
  

  return (
    <div className={classes.MyPage}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.right}>
            <UserInfo
              avatar_url={userInfo.avatar_url}
              name={userInfo.name}
              login={userInfo.login}
              location={userInfo.location}
            />
          </div>

          <div className={classes.left}>
            <div className={classes.page}>
              <Link to="repos">
                <div className={classes.repositories}>
                  <RiGitRepositoryLine />
                  <span>Repositories</span>
                </div>
              </Link>
              <Link to="star">
                <div className={classes.repositories}>
                  <AiOutlineStar />
                  <span>Star</span>
                </div>
              </Link>
              <Link to="follower">
                <div className={classes.repositories}>
                  <SlUserFollowing />
                  <span>Follower</span>
                </div>
              </Link>
              <Link to="following">
                <div className={classes.repositories}>
                  <SlUserFollowing />
                  <span>Following</span>
                </div>
              </Link>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
