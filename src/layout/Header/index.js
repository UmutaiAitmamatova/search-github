import React, { useEffect, useState } from 'react';
import classes from './Header.module.scss';
import { BsGithub } from 'react-icons/bs'
import { MdNotificationsNone, MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/common/Dropdown';
import { searchGitHubUser } from "../../api/SearchUsers/searchSlice";
import { selectUserData, selectError, selectLoading } from "../../api/SearchUsers/searchSlice";

function Header() {
    const dispatch = useDispatch();
    const { userInfoo } = useSelector((state) => state.userInfo);
    const [username, setUsername] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchGitHubUser(username));
    };

    const userData = useSelector(selectUserData);
    const loading = useSelector(selectLoading);

    if (loading) return <p>Loading...</p>;

    return (
        <header>
            <div className={classes.container}>
                <div className={classes.block}>
                    <div className={classes.right}>
                        <div><BsGithub size={32} /></div>
                        <div className={classes.search}>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder='Search or jump to...'
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                                <button type="submit">Search</button>
                            </form>
                            <Dropdown loading={loading} userData={userData} />
                        </div>
                    </div>
                    <div className={classes.left}>
                        <div><MdNotificationsNone size={22} /></div>
                        <div className={classes.drop}><div><AiOutlinePlus /></div> <MdArrowDropDown /></div>
                        <Link to='user'><div className={classes.drop}> <div> <img src={userInfoo.avatar_url} alt="AVATAR" className={classes.img} /> </div> <MdArrowDropDown /> </div></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header


// import React, { useState, useEffect } from "react";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [userData, setUserData] = useState(null);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(
//         `https://api.github.com/users/${username}`
//       );
//       const data = await response.json();
//       setUserData(data);
//     } catch (err) {
//       setError(err);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Enter GitHub username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <button type="submit">Search</button>
//       </form>
//       {error && <div>Error: {error.message}</div>}
//       {userData && (
//         <div>
//           <img src={userData.avatar_url} alt="avatar" />
//           <h3>{userData.name}</h3>
//           <p>Followers: {userData.followers}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;
