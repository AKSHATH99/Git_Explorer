import React from "react";

const FollowersCard = ({ follower }) => {
  return (
    <div className="   text-center  flex p-4 ">
      <img className="h-12 w-12 rounded-full " src={follower.avatar_url} alt="Follower Avatar" />
      
      <a
        href={follower.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 hover:underline mt-2  ml-6"
      >
        <p className="font-bold text-xl  text-black ml-2">{follower.login}</p>
      </a>
    </div>
  );
};

export default FollowersCard;
