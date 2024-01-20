import React, { useEffect, useState } from 'react';
import { followers_url } from './constants';
import FollowersCard from './FollowersCard';

const Followers = (props) => {
  const { user } = props;
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    fetchFollowers(user);
  }, [user]);

  async function fetchFollowers(user) {
    try {
      const response = await fetch(followers_url + user + '/followers');

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json();
      setFollowers(json);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

  return (
    <div className='text-white m-4 p-4  '>
      <p className='m-4 p-4  '>FOLLOWERS</p>
    <div className='flex flex-wrap ml-28'>
      {followers.length == 0
        ? null
        : followers.map((follower, index) => (
            <FollowersCard key={index} follower={follower} />
          ))}
    </div>
    </div>
  );
};

export default Followers;
