import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Follow from "../common/Follow";

function Followers() {
    const { myFollowers } = useSelector((state) => state.myFollowers);
    return (
        <div>
            {myFollowers.length > 0 && (
                <div>
                    {myFollowers.map((follow, index) => (
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

export default Followers;
