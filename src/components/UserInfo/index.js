import React from "react";
import classes from "./UserInfo.module.scss";
import { HiOutlineLocationMarker } from 'react-icons/hi'

function UserInfo({userInfoo}) {
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

      <div className={classes.location}>
          <HiOutlineLocationMarker size={20}/> <span>{userInfoo.location}</span>
        </div>

    </div>
  );
}

export default UserInfo;
