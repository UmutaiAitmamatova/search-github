import React from "react";
import { useSelector } from "react-redux";
import Follow from "../common/Follow";

function UsersFollower() {
    const { usersFollower } = useSelector((state) => state.usersFollower);
    return (
        <div>
            {usersFollower.length > 0 && (
                <div>
                    {usersFollower.map((follow, index) => (
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

export default UsersFollower;
