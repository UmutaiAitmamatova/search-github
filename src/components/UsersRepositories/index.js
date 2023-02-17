import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function UsersRepositories() {
    const { usersRepos } = useSelector((state) => state.usersRepos);
    const [activeFilter, setActiveFilter] = useState('all');
    const [pagination, setPagination] = useState(1); 
    return (
        <div>
            <Filters setActiveFilter={setActiveFilter}/>
            {usersRepos.length > 0 && (
                <div>
                    {usersRepos.filter((elem) => activeFilter === 'all' ? true : elem.language === activeFilter).slice(0,pagination*4).map((el, index) => (
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
            <button onClick={()=> setPagination(pagination+1)} style={{backgroundColor: '#363A3D', color: '#d8d8d2', padding: '6px 15px', borderRadius: '5px', marginBottom: '20px', marginTop: '10px'}}>more</button>
        </div>
    )
}
export default UsersRepositories