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
          className={classes.img}
        />
      </div>
      <div className={classes.info}>
        <div className={classes.nickname}>{name}</div>
        <div className={classes.fullname}>{login}</div>
        <div className={classes.location}>
          <HiOutlineLocationMarker className={classes.loc_logo}/> <span>{location}</span>
        </div>
      </div>

    </div>
  );
}
 
export default UserInfo;
