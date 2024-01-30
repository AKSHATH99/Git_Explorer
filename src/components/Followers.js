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
    <div className='text-black  p-1 mt-3 '>
      
    <div className='flex-row w-max overflow-scroll h-96'>
      <p className=' p-1 top-0 sticky bg-gray-300 text-2xl'>Followers ({followers.length})</p>
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
