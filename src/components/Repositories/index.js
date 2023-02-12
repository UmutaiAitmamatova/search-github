import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchGitHubUserRepos, selectUserRepos } from '../../api/SearchUsers/searchUserReposSlice';
import Repository from '../common/Repository';
import Filters from '../Filters'

function Repositories() {
    const { userRepos } = useSelector((state) => state.userRepos);
    // const dispatch = useDispatch();
    // dispatch(searchGitHubUserRepos());
    // const usersRepos = useSelector(selectUserRepos);
    // console.log('usersRepos', usersRepos);
    return (
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