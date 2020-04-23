import React, { useState, useEffect } from "react";
import api from './services/api'

import RepositoryList from './components/RespositoryList'

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState([])
  useEffect(() => {
    api.get('/repositories', []).then(response => {
      setRepositories(response.data)
    })
  }, [])

  const handleAddRepository = async () => {
    const newRepositoryData = {
      title: `Repository ${Date.now()}`,
      url: "http://github.com/vitorgiovane",
      techs: ["ReactJS", "Node.js"]
    }

    api.post('/repositories', newRepositoryData).then(response => {
      setRepositories([...repositories, response.data])
    })
  }

  const handleRemoveRepository = async (id) => {
    api.delete(`/repositories/${id}`).then(response => {
      setRepositories(repositories.filter(repository => repository.id !== id))
    })
  }

  return (
    <>
      <h1>My repo list</h1>
      <RepositoryList
        repositories={repositories}
        handleAddRepository={handleAddRepository}
        handleRemoveRepository={handleRemoveRepository}
      />
    </>
  );
}

export default App;
