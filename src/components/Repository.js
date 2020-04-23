import React from 'react'

const Repository = ({ repository, handleRemoveRepository }) => {
  return (
    <li>
      {repository.title}

      <button onClick={() => handleRemoveRepository(repository.id)}>
        Remover
          </button>
    </li>
  )
}

export default Repository
