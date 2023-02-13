import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import UserInfo from "../UserInfo";
import classes from "./MyPage.module.scss";
import { Link } from "react-router-dom";
import { RiGitRepositoryLine } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { SlUserFollowing } from "react-icons/sl";
import { userInfoThunk } from "../../api/UserInfo/user.thunk";
import { myFollowersThunk } from "../../api/myFollowers/myFollowers.thunk";
import { myFollowingThunk } from "../../api/myFollowing/myFollowing.thunk";
import { myReposThunk } from "../../api/myRepos/myRepos.thunk";
import { myStarReposThunk } from "../../api/myStarRepos/myStarRepos.thunk";

const MyPage = () => {
  const { userInfoo } = useSelector((state) => state.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userInfoThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myReposThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myFollowersThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myFollowingThunk());
  }, [dispatch]);

  useEffect(() => {
    dispatch(myStarReposThunk());
  }, [dispatch]);

  return (
    <div className={classes.MyPage}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.right}>
            <UserInfo
              avatar_url={userInfoo.avatar_url}
              name={userInfoo.name}
              login={userInfoo.login}
              location={userInfoo.location}
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

export default MyPage;
