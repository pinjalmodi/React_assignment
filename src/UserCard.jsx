import React from 'react'

const UserCard = ({ name, age, location }) => {
    
  return (
    
      <div className="user-card">
      <h2 className="user-name">{name}</h2>
      <p className="user-age">Age: {age}</p>
      <p className="user-location">Location: {location}</p>
    </div>
  )
}

export default UserCard
