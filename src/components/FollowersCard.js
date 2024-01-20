import React from "react";

const FollowersCard = ({ follower }) => {
  return (
    <div className="border border-gray-300 w-56 h-56 m-6 text-center rounded-md ">
      <img className="h-24 w-24 rounded-full mt-6 mx-auto" src={follower.avatar_url} alt="Follower Avatar" />
      <p className="font-bold text-xl mt-4">{follower.login}</p>
      <a
        href={follower.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-blue-500 hover:underline mt-2"
      >
        GITHUB
      </a>
    </div>
  );
};

export default FollowersCard;
