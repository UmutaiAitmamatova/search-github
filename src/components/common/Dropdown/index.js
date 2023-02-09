import React, { useState } from "react";
import classes from './Dropdown.module.scss';
import { BiBook } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Dropdown = ({ userData }) => {
    const navigate = useNavigate()

    return (
        <div>
            <div className={classes.dropdown} onClick={() => navigate(`/user/${userData.login}`)}>
                    <BiBook />
                    <div>
                        <img
                            alt='AVATAR'
                            src={userData.avatar_url}
                            className={classes.img}
                        />
                    </div>
                    <div >{userData.login}</div>
                </div>
        </div>
    );
};

export default Dropdown;