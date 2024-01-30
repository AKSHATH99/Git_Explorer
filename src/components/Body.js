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
    <div className="">
      <div className="bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
        <div className="p-16 ml-44">
          <p className="text-white text-4xl">
            Search For A Github User To View Their Details 🔍
          </p>
        </div>
        <input
          placeholder="Search username here"
          className="border border-black ml-96 mt-0 my-12 h-14 w-2/5 font-mono rounded-l-lg"
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
      <div className="flex justify-around">
        <div className="m-56 mr-0 ml-0 mt-0 mb-0 bg-white  ">
          {userdata.length === 0 ? null : <ProfileCard userdata={userdata} />}
        </div>
        {userdata.length === 0 ? null : (
          <div className=" mt-6 ">
            <ul className="flex justify-around">
              <li className="text-xl m-10  -ml-20 font-bold hover:cursor-pointer">
                {/* {followers ? <Followers user= {search} /> : null} */}
                <Followers user={search} />
              </li>
              <li className="text-xl font-bold m-10 hover:cursor-pointer">
                {/* {following ? <Following user={search} /> : null} */}
                <Following user={search} />
              </li>
              {/* <li></li> */}
            </ul>
          </div>
        )}
      </div>
      <h1 className="text-6xl pl-24 pt-14 font-bold text-blue-500 ">Repositories</h1>
      {/* {repo ? <Repositories user= {search} /> : null} */}
      <Repositories user={search} />
    </div>
  );
};

export default Body;
