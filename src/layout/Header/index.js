import React, { useState } from 'react';
import classes from './Header.module.scss';
import { BsGithub } from 'react-icons/bs'
import { MdArrowDropDown } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/common/Dropdown';
import { searchGitHubUser } from "../../api/SearchUsers/searchSlice";
import { selectUserData, selectLoading } from "../../api/SearchUsers/searchSlice";
import debounce from 'lodash/debounce';
import { useCallback } from 'react';

function Header() {
    const dispatch = useDispatch();
    const { userInfoo } = useSelector((state) => state.userInfo);
    const [username, setUsername] = React.useState("");
    const [isActive, setIsActive] = useState(false)
    const userData = useSelector(selectUserData);
    const loading = useSelector(selectLoading);
    const delayedDispatch = useCallback(debounce((searchTerm) => {
        dispatch(searchGitHubUser(searchTerm));
        setIsActive(true)
    }, 500), [dispatch]);

    const handleSubmit = (e) => {
        e.preventDefault();
        delayedDispatch(username);
        setUsername("");
    };

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.block}>
                    <div className={classes.right}>
                        <div><BsGithub size={32} /></div>

                        <div className={classes.search}>
                            <form className={classes.forms} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder='Search or jump to...'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button className={classes.btn} type="submit">Search</button>
                            </form>
                            {isActive && userData && userData.items ? (
                                <Dropdown setIsActive={setIsActive} userData={userData.items} />
                            ) : loading ? (
                                <p className={classes.loading}>Loading...</p>
                            ) : null}
                        </div>

                    </div>

                    <div className={classes.left}>
                        <Link to='/'><div onClick={()=> setIsActive(false)} className={classes.drop}> <div> <img src={userInfoo.avatar_url} alt="AVATAR" className={classes.img} /> </div> <MdArrowDropDown /> </div></Link>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
