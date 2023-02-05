import React, { useEffect } from "react";
import Filters from "../Filters";
import Repositories from "../Repositories";
import classes from "./MyPage.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserReposThunk, userInfoThunk } from "../../api/UserInfo/user.thunk";
import UserInfo from "../UserInfo";

const MyPage = () => {
  const { userRepos } = useSelector((state) => state.userRepos);
  console.log('userRepositories', userRepos);

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
            <UserInfo />
          </div>

          <div className={classes.left}>
            <h2>Repositories</h2>
            <Filters />
            
            {userRepos.length > 0 && (
              <div className={classes.repos}>
                {userRepos.map((repos, index) => (
                  <Repositories key={index} repos={repos} />
                ))}
              </div>
            )}


          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
