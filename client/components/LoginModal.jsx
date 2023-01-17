import React from 'react';


const handleClick = (e) => {
  e.preventDefault();
  if (e.target.id === 'sign-in-btn') {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const user = {username, password};
    
    const loginUser = async () => {
      try {
        const res = await fetch('/api/login', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err)
      }
    }
    loginUser();
  } 
  else if (e.target.id === 'sign-up-btn') {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const user = {username, password};
    
    const createUser = async () => {
      try {
        const res = await fetch('/api/signup', {
          method: 'POST',
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = await res.json();
        console.log(data);
      } catch (err) {
        console.log(err)
      }
    }
    createUser();
  }
}

const LoginModal = ({setModal}) => (
  <div id="login-modal">
    <form>
      <label>Username: </label>
      <input id="username" type="text" />

      <label>Password: </label>
      <input id="password" type="text" />

      <button id="sign-in-btn"
        onClick={(e) => {handleClick(e)}}>
        Login
      </button>

      <button id="sign-up-btn"
        onClick={(e) => {handleClick(e)}}>
        Sign Up
      </button>

      <button 
        id="cancel-sign-in-btn" 
        onClick={() => {setModal(false)}}>
        X
      </button>

    </form>
  </div>
)

export default LoginModal;