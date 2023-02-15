import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';

function Overview() {
  const { myRepos } = useSelector((state) => state.myRepos);

  return (
    <div>
      <h2>Popular repositories</h2>
    {myRepos.length > 0 && (
        <div>
            {myRepos.slice(0,4).map((el, index) => (
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

export default Overview;
