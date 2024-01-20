import React, { useEffect, useState } from "react";
import { repo_url } from "./constants";
import Repocard from "./Repocard";

const Repositories = (props) => {
  const { user } = props;
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetchRepos(user);
  }, [user]);

  async function fetchRepos(user) {
    try {
      const response = await fetch(repo_url + user + "/repos");

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const json = await response.json();
      setRepos(json);
      
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }

  return (
    <div className="text-white m-8">
      <h2 className="text-2xl ml-56 ">REPOSITORIES </h2>
      {repos.length === 0 ? null : (
        <div className="flex flex-wrap ml-10">
          {repos.map((repo) => (
            <Repocard key={repo.id} repo={repo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Repositories;
