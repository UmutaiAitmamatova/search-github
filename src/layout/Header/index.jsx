import React from 'react';
import classes from './Header.module.scss';
import { BsGithub } from 'react-icons/bs'
import { MdNotificationsNone, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

function Header() {
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
                        <div className={classes.drop}><div><AiOutlinePlus /></div> <MdArrowDropUp /></div>
                        <div className={classes.drop}> <div className={classes.img}></div> <MdArrowDropUp /> </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header