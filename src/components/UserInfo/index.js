import React from "react";
import classes from "./UserInfo.module.scss";
import { useSelector } from "react-redux";

function UserInfo() {
  const { userInfoo } = useSelector((state) => state.userInfo);
  // console.log('userInfoo', userInfoo);

  return (
    <div className={classes.UserInfo}>
      <div>
        <img
          alt='AVATAR'
          src={userInfoo.avatar_url}
          style={{ borderRadius: "50%", width: "330px" }}
        />
      </div>
      <div className={classes.nickname}>{userInfoo.name}</div>
      <div className={classes.fullname}>{userInfoo.login}</div>
      <div className={classes.follow}>
        <div className={classes.followers}>

          <span>{userInfoo.followers}</span> followers
        </div>
        <div className={classes.following}>

          <span>{userInfoo.following}</span> following
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
