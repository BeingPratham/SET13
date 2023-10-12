import './login.css';
import React from 'react'

export default function Login(props) {
    const onSubmit = ((e)=>{
        e.preventDefault();
        console.log("Login");
    })
  return (
    <div className="login-form">
        <h2>{props.title}</h2>
        <form onSubmit={onSubmit}>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button type="submit">{props.submitButtonText}</button>
        </form>
      </div>
  )
}
