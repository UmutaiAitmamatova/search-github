import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function Repositories() {
    const { userRepos } = useSelector((state) => state.userRepos);
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