import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { usersReposThunk } from '../../api/UserInfo/user.thunk';
import Repository from '../common/Repository';
import Filters from '../Filters'

function UsersRepositories() {
    const dispatch = useDispatch()
    const { usersRepos } = useSelector((state) => state.usersRepos);
    console.log('Repos', usersRepos);
    return (
        <div>
            <Filters usersRepos={usersRepos}/>
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
    )
}

export default UsersRepositories