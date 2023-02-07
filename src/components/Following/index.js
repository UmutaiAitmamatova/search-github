import React from 'react';
import { useSelector } from 'react-redux';
import Follow from '../common/Follow';

function Following() {
  const { myFollowing } = useSelector((state) => state.myFollowing);
  return (
    <div>
        {myFollowing.length > 0 && (
                <div>
                    {myFollowing.map((follow, index) => (
                        <Follow 
                          key={index} 
                          img={follow.avatar_url}
                          name={follow.login}
                          />
                    ))}
                </div>
            )}
    </div>
  )
}

export default Following