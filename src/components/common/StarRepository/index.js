import React from 'react'
import { useSelector } from 'react-redux';
import Repository from '../Repository'

function StarRepos() {
  const { myStarRepos } = useSelector((state) => state.myStarRepos);

  return (
    <div>
      {myStarRepos.length > 0 && (
        <div>
          {myStarRepos.map((repos, index) => (
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

export default StarRepos