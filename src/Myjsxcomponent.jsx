import React, { Fragment } from 'react'
import Greeting from './Greeting';
import UserCard from './UserCard';

export default function Myjsxcomponent() {
    const jsxDescription = "JSX allows us to write HTML in JavaScript, and it gets compiled to JavaScript by React.";
    const userName = "Pinjal"
    return (
<Fragment>    
<div>
      <h1>Welcome to JSX</h1>
      <p>{jsxDescription}</p>
      <p>{userName}</p>
      <div className="user-cards">
        <UserCard name="Pinjal" age={30} location="Ahmedabad" />
        <UserCard name="Sejal" age={25} location="Pune" />
        <UserCard name="Kinjal" age={35} location="Mumbai" />
      <Greeting name={userName}/>
      </div>
    </div>
    </Fragment>

  )
}