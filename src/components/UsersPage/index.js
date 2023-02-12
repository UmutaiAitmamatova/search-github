import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import classes from "./UsersPage.module.scss";
import { useSelector } from "react-redux";

import UserInfo from "../UserInfo";
import { Link } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { selectLoading, selectUserInfo } from "../../api/SearchUsers/userInfoSlice";

const UsersPage = () => {
  const usersInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectLoading);

  if (loading) return <p>Loading...</p>;  

  return (
    <div className={classes.MyPage}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.right}>
            <UserInfo
              avatar_url={usersInfo.avatar_url}
              name={usersInfo.name}
              login={usersInfo.login}
              location={usersInfo.location}
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
