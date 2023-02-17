import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../common/Repository';

function UserOverview() {
  const { usersRepos } = useSelector((state) => state.usersRepos);

  return (
    <div>
      <h2>Popular repositories</h2>
      {usersRepos.length > 0 && (
        <div>
          {usersRepos.slice(0, 4).map((el, index) => (
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

export default UserOverview;