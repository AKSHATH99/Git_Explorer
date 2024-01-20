import React, { useEffect, useState } from "react";
import { GIT_USER_API } from "./constants";
import ProfileCard from "./ProfileCard";
import Repositories from "./Repositories";
import Followers from "./Followers";
import Following from "./Following";
// import F

const Body = () => {
  const [userdata, setuserdata] = useState([]);
  const [search, setsearch] = useState("");
  const [repo, setrepo] = useState(false);
  const [followers, setfollowers] = useState(false);
  const [following, setfollowing] = useState(false);
  console.log(search);

  useEffect(() => {
    const timer = setTimeout(() => fetchdata(search), 500);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  async function fetchdata(search) {
    try {
      const response = await fetch(GIT_USER_API + search);

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json();
      //   console.log(json.login);
      setuserdata(json);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return (
    <div className="bg-gray-950">
      <div className="flex">
        <input
          placeholder="Search username here"
          className="border border-black ml-80 my-16 h-14 w-1/3 font-mono rounded-l-lg"
          type="text"
          onChange={(e) => {
            setsearch(e.target.value);
          }}
        />
        {/* <button className="border border-black h-14 my-16 w-24" >SEARCH</button> */}
      </div>
      {/* <img alt="user" src={userdata.avatar_url}/>
        {userdata.login} <br/>
        {userdata.bio}<br/>
        Followers :{userdata.followers}<br/>
        Following :{userdata.following}<br/>
        <a  href={userdata.twitter_username}>Twitter</a> <br/>
        No of repositories : {userdata.public_repos}<br/> */}
      <div className="m-56 mt-0 mb-0 ">
        {userdata.length === 0 ? null : <ProfileCard userdata={userdata} />}
      </div>
      {userdata.length === 0 ? null : (
        <div className="text-white mt-6 ">
          <ul className="flex justify-around">
            <li
              className="text-xl hover:cursor-pointer"
              onClick={() => {
                setrepo(true);
                setfollowers(false);
                setfollowing(false);
              }}
            >
              REPOSITORIES
            </li>
            <li
              className="text-xl hover:cursor-pointer"
              onClick={() => {
                setfollowers(true);
                setrepo(false);
                setfollowing(false);
              }}
            >
              FOLLOWERS
            </li>
            <li
              className="text-xl hover:cursor-pointer"
              onClick={() => {
                setfollowing(true);
                setfollowers(false);
                setrepo(false);
              }}
            >
              FOLLOWING
            </li>
            {/* <li></li> */}
          </ul>
        </div>
      )}

      {repo ? <Repositories user= {search} /> : null}
      {followers ? <Followers user= {search} /> : null}
      {following ? <Following user={search} /> : null}
    </div>
  );
};

export default Body;
