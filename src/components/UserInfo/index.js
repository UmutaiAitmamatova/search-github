import React from "react";
import classes from "./UserInfo.module.scss";
import { HiOutlineLocationMarker } from 'react-icons/hi'

function UserInfo({avatar_url, name, login, location }) {
  return (
    <div className={classes.UserInfo}>
      <div>
        <img
          alt='AVATAR'
          src={avatar_url}
          style={{ borderRadius: "50%", width: "330px" }}
        />
      </div>
      <div className={classes.nickname}>{name}</div>
      <div className={classes.fullname}>{login}</div>

      <div className={classes.location}>
          <HiOutlineLocationMarker size={20}/> <span>{location}</span>
        </div>

    </div>
  );
}

export default UserInfo;
