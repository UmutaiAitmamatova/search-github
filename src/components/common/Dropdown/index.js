import React, { useEffect, useState } from "react";
import classes from './Dropdown.module.scss';
import { BiBook } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { selectUserInfo } from "../../../api/SearchUsers/userInfoSlice";
import { useDispatch } from "react-redux";

const Dropdown = ({ userData, setIsActive }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <div className={classes.dropdown}>
            {userData.length > 0 && userData.map((item) => {
                return (
                    <div className={classes.content} onClick={() => {
                        navigate(`/user/${item.login}`)
                        console.log('item.login', item.login);
                        setIsActive(false)
                        dispatch(selectUserInfo(item.login));
                    }}>
                        <BiBook />
                        <div>
                            <img
                                alt='AVATAR'
                                src={item.avatar_url}
                                className={classes.img}
                            />
                        </div>
                        <div >{item.login}</div>
                    </div>
                );
            })}
        </div>
    )
};
export default Dropdown;