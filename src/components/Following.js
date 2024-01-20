import React, { useEffect, useState } from 'react'
import FollowersCard from './FollowersCard';

const Following = (props) => {
  const {user } = props;
  const [following , setfollowing]=useState([])

  useEffect(()=>{
    fetchfollowing(user);
  },[user])

  async function fetchfollowing(user){
    try{
      const response =await fetch('https://api.github.com/users/'+ user + '/following');
      if(!response.ok){
        throw new Error (`Error: ${response.status} - ${response.statusText}`)
      }
      const json = await response.json();
      console.log(json);
      setfollowing(json)
    }catch(error){
      console.error('Error fetching data:', error.message)
    }
  }


  return (
    <div className='text-white m-4 p-4  '>
      <p className='m-4 p-4  '>FOLLOWING</p>
    <div className='flex flex-wrap ml-28'>
      {following.length == 0
        ? null
        : following.map((following, index) => (
            <FollowersCard key={index} follower={following} />
          ))}
    </div>
    </div>
  )
}

export default Following
