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
    <div className='text-black  p-5 mt-3 '>
      
    <div className='  flex-row w-max overflow-scroll h-96'>
    <p className='p-1 top-0 sticky bg-gray-300 text-2xl'>Following ({following.length})</p>

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
