import React, { useEffect, useState } from "react";


const Repocard = ({ repo }) => {
  const lang_api= "https://api.github.com/repos/AKSHATH99/Annoying-submit-button/languages";
  const [langs , setlangs]=useState([])

  console.log(repo)

  useEffect(() => {
    fetchlanguages();
  }, []);
  
  async function fetchlanguages() {
    try {
      const response = await fetch(lang_api);
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
      const json = await response.json();
      console.log(json); // Full API response
      console.log(json.CSS); // Value associated with 'css' key in the JSON response
      // setfollowing(json); // Uncomment and use this line if you want to set the state with the entire JSON response
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }
  


  return (
    <div className="border border-gray-300 bg-blue-100 text-gray-800 p-6 rounded-lg shadow-md m-4">
      <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
        <p className="font-bold text-2xl mb-2">{repo.full_name}</p>
      </a>
      <p className="text-base">{repo.description}</p>
      <div className="flex items-center mt-4">
        <img    
          className="w-7 h-7 mr-2"
          src="https://cdn.icon-icons.com/icons2/1875/PNG/512/gitfork_120084.png"
          alt="Fork Icon"
        />
        <p className="text-xl mr-4">{repo.forks}</p>
        {repo.homepage ? (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white rounded-lg p-2"
          >
            LIVE LINK
          </a>
        ) : null}
       <p className="ml-3">{repo.fork==true? "Forked":null}</p> 
       <p className="ml-3">{repo.language}</p> 
      </div>
    </div>
  );
};

export default Repocard;
