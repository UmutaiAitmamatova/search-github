import React from 'react';
import classes from './Header.module.scss';
import { BsGithub } from 'react-icons/bs'
import { MdNotificationsNone, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
    const { userInfoo } = useSelector((state) => state.userInfo);
    return (
        <header>
            <div className={classes.container}>
                <div className={classes.block}>
                    <div className={classes.right}>
                        <div><BsGithub size={32} /></div>
                        <input type="text" placeholder='Search or jump to...' />
                    </div>
                    <div className={classes.left}>
                        <div><MdNotificationsNone size={22} /></div>
                        <div className={classes.drop}><div><AiOutlinePlus /></div> <MdArrowDropDown /></div>
                        <Link to='user'><div className={classes.drop}> <div> <img src={userInfoo.avatar_url} alt="AVAtAR" className={classes.img}/> </div> <MdArrowDropDown /> </div></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header