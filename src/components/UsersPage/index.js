import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo";
import classes from "./UsersPage.module.scss";
import { Link } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { selectLoading, selectUserInfo } from "../../api/SearchUsers/userInfoSlice";
import { usersStarReposThunk } from "../../api/UsersStarRepos/usersStarRepos.thunk";
import { usersFollowerThunk } from "../../api/UsersFollower/usersFollower.thunk";
import { usersFollowingThunk } from "../../api/UsersFollowing/usersFollowing.thunk";
import { usersReposThunk } from "../../api/UsersRepos/usersRepos.thunk";

const UsersPage = () => {
  const usersInfo = useSelector(selectUserInfo);
  const loading = useSelector(selectLoading);
  const dispatch = useDispatch()
  let username = '';
  if (usersInfo) {
    username = usersInfo.login;
  }

  useEffect(() => {
    if (usersInfo) {
      dispatch(usersReposThunk(username));
    }
  }, [usersInfo]);

  useEffect(() => {
    if (usersInfo) {
      dispatch(usersReposThunk(username));
    }
  }, [usersInfo]);

  useEffect(() => {
    dispatch(usersStarReposThunk(username));
  }, [usersInfo]);

  useEffect(() => {
    dispatch(usersFollowerThunk(username));
  }, [usersInfo]);

  useEffect(() => {
    dispatch(usersFollowingThunk(username));
  }, [usersInfo]);

  if (loading) return <p className={classes.loading}>Loading...</p>;

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
              <div className={classes.top}>
                <Link to={`${username}/`}>
                  <div className={classes.repositories}>
                    <RiGitRepositoryLine />
                    <span>Overview</span>
                  </div>
                </Link>
                <Link to={`${username}/usersRepos`}>
                  <div className={classes.repositories}>
                    <RiGitRepositoryLine />
                    <span>Repositories</span>
                  </div>
                </Link>
                <Link to={`${username}/usersStar`}>
                  <div className={classes.repositories}>
                    <AiOutlineStar />
                    <span>Star</span>
                  </div>
                </Link>
              </div>

              <div className={classes.bottom}>
                <Link to={`${username}/usersFollower`}>
                  <div className={classes.repositories}>
                    <SlUserFollowing />
                    <span>Follower</span>
                  </div>
                </Link>
                <Link to={`${username}/usersFollowing`}>
                  <div className={classes.repositories}>
                    <SlUserFollowing />
                    <span>Following</span>
                  </div>
                </Link>
              </div>
            </div>

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
