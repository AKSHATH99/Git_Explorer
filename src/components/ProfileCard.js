import React from "react";

const ProfileCard = (userdata) => {
  return (
    <div className="w-96 rounded-xl text-center border border-white shadow-2xl ml-0 mt-20">
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
        <div className="m-4 mt-2 flex justify-between ml-10 w-max">
          <div><img className="h-7 w-7" src="https://cdn-icons-png.flaticon.com/512/4412/4412188.png"/> </div>
          <div className="font-bold text-xl">Company : </div>{" "}
          <div className="text-xl ml-1"> {userdata.userdata.company}</div>
        </div>
      ) : null}

      {userdata.userdata.location !== null ? (
        <div className="flex ml-12 my-3">
          <span className="font-bold">
            <img
              className="h-7 w-8"
              src="https://cdn-icons-png.flaticon.com/512/2838/2838912.png"
              alt="location"
            />
          </span>{" "}
          <span className="font-bold text-xl">Location :</span>
          <span className="ml-3">{userdata.userdata.location}</span>
        </div>
      ) : null}

      <div className="mt-4 flex flex-col justify-center">
        <div className="m-4 mb-0 ml-0 w-full">
          <a
            className="border border-gray-400 bg-black text-white p-2 rounded-md hover:bg-gray-600 transition duration-300 block"
            href={userdata.userdata.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            View On GitHub 
          </a>
        </div>
        {userdata.userdata.twitter_username !== null ? (
          <div className="m-4 ml-0 mt-0 w-full">
            <a
              className="border border-gray-400 bg-black text-white p-2 rounded-md hover:bg-blue-500 transition duration-300 block"
              href={`https://twitter.com/${userdata.userdata.twitter_username}`}
              target="_blank"
              rel="noopener noreferrer"
            > 
              Twitter Profile 
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ProfileCard;
