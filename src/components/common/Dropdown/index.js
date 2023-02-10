import React, { useState } from "react";
import classes from './Dropdown.module.scss';
import { BiBook } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const Dropdown = ({ userData }) => {
    const [isActive, setIsActive] = useState(false);

    const navigate = useNavigate();
    return (
        <div className={classes.dropdown}>
            {userData.length > 0 && userData.map((item) => {
                return (
                    <div className={classes.content} onClick={(e) => {
                        navigate(`/user/${item.login}`)
                        e.preventDefault();
                        setIsActive(!isActive)
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