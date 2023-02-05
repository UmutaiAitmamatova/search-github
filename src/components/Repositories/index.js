import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function Repositories() {
    const { userRepos } = useSelector((state) => state.userRepos);
    console.log('userRepos', userRepos);
    return (
        <div>
            <Filters />

            {userRepos.length > 0 && (
                <div>
                    {userRepos.map((repos, index) => (
                        <Repository key={index} repos={repos} />
                    ))}
                </div>
            )}

        </div>
    )
}

export default Repositories