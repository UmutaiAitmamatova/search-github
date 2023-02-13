import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function Repositories({ userRepos, usersRepos, mypage, users }) {
    console.log('usersRepos', usersRepos);

    return (
        users ? 
        <div>
            <Filters />
            {usersRepos.length > 0 && (
                <div>
                    {usersRepos.map((el, index) => (
                        <Repository 
                            key={index} 
                            name={el.name}
                            language={el.language}
                            updated_at={el.updated_at} 
                            visibility={el.visibility}
                        />
                    ))}
                </div>
            )}
        </div>
        : 
        <div>
            <Filters />
            {userRepos.length > 0 && (
                <div>
                    {userRepos.map((repos, index) => (
                        <Repository 
                            key={index} 
                            name={repos.name}
                            language={repos.language}
                            updated_at={repos.updated_at} 
                            visibility={repos.visibility}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Repositories