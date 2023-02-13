import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';
import Filters from '../Filters'

function Repositories() {
    const { myRepos } = useSelector((state) => state.myRepos);
    const [activeFilter, setActiveFilter] = useState('all');
    return (
        <div>
            <Filters setActiveFilter={setActiveFilter}/>
            {myRepos.length > 0 && (
                <div>
                    {myRepos.filter((elem) => activeFilter === 'all' ? true : elem.language === activeFilter).map((el, index) => (
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
export default Repositories;