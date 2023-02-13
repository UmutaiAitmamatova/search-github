import React from "react";
import { useSelector } from "react-redux";
import Follow from "../common/Follow";

function UsersFollowing() {
    const { usersFollowing } = useSelector((state) => state.usersFollowing);
    return (
        <div>
            {usersFollowing.length > 0 && (
                <div>
                    {usersFollowing.map((follow, index) => (
                        <Follow
                            key={index}
                            img={follow.avatar_url}
                            name={follow.login}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default UsersFollowing;
