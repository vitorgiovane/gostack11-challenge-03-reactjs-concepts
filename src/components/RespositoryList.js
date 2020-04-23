import React from 'react'

import Repository from './Repository'

const RepositoryList = ({ repositories, handleAddRepository, handleRemoveRepository }) => {
  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map(repository => <Repository key={repository.id} repository={repository} handleRemoveRepository={handleRemoveRepository} />)}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  )
}

export default RepositoryList
