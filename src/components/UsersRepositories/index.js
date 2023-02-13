import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function UsersRepositories() {
    const { usersRepos } = useSelector((state) => state.usersRepos);
    const [activeFilter, setActiveFilter] = useState('all');
    return (
        <div>
            <Filters setActiveFilter={setActiveFilter}/>
            {usersRepos.length > 0 && (
                <div>
                    {usersRepos.filter((elem) => activeFilter === 'all' ? true : elem.language === activeFilter).map((el, index) => (
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