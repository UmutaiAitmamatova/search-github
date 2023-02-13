import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository'

function UsersStarRepositories() {
    const { usersStarRepos } = useSelector((state) => state.usersStarRepos);

    return (
        <div>
            {usersStarRepos.length > 0 && (
                <div>
                    {usersStarRepos.map((repos, index) => (
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

export default UsersStarRepositories;