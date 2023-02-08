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

const UsersPage = () => {
  const { usersData } = useSelector((state) => state.usersData);
  console.log('usersData', usersData);

  return (
    <div className={classes.MyPage}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.right}>
            <UserInfo
              avatar_url={usersData.avatar_url}
              name={usersData.name}
              login={usersData.login}
              location={usersData.location}
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
