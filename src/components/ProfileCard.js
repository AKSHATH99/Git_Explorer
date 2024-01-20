import React from "react";

const ProfileCard = (userdata) => {
  return (
    <div className="bg-black text-white w-2/5 rounded-xl text-center border border-white shadow-2xl ml-32">
      <div className="flex mx-4">
        <img
          className="rounded-full h-32 mx-2"
          alt="user"
          src={userdata.userdata.avatar_url}
        />
        <div>
          <p className="font-bold text-2xl mt-7">{userdata.userdata.login}</p>
          <p className="text-xl my-4 mt-0">{userdata.userdata.name}</p>
        </div>
      </div>
      <p className="text-sms mt-6">{userdata.userdata.bio}</p> <br />
      {userdata.userdata.company !== null ? (
        <div className="m-4 mt-2 flex  ml-12">
          <span><img className="h-7 w-7" src="https://cdn-icons-png.flaticon.com/512/4412/4412188.png"/> </span>
          <span className="font-bold text-xl">Company : </span>{" "}
          <span className="text-xl ml-1"> {userdata.userdata.company}</span>
        </div>
      ) : null}

      {userdata.userdata.location !== null ? (
        <div className="flex ml-12 my-3">
          <span className="font-bold">
            <img
              className="h-7 w-7"
              src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes/128/map-circle-blue-512.png"
              alt="location"
            />
            </span>{" "}
          <span className="font-bold text-xl">Location :</span>
          
          <span className="ml-3">{userdata.userdata.location}</span>
        </div>
      ) : null}
      <div className="mt-4 flex justify-center">
        <div className="m-4">
          <a
            className="border border-gray-400 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
            href={userdata.userdata.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        {userdata.userdata.twitter_username !== null ? (
          <div className="m-4">
            <a
              className="border border-gray-400 bg-blue-400 text-white p-2 rounded-md hover:bg-blue-500 transition duration-300"
              href={`https://twitter.com/${userdata.userdata.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
            > 
              Twitter
            </a>
          </div>
        ) : null}
      </div>
      {/* <div className="flex mx-20">
        <p className="mx-3">Followers : {userdata.userdata.followers}</p>
        <p>Following : {userdata.userdata.following}</p>
      </div>

      
      <p className="m-5">No of repositories : {userdata.userdata.public_repos}</p>
      <br /> */}
    </div>
  );
};

export default ProfileCard;
