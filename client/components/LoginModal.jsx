import React from 'react';


const handleClick = (e) => {
  e.preventDefault();
  if (e.target.id === 'sign-in-btn') {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const user = {username, password};
    
    const createUser = async () => {
      try {
        const res = fetch('/signup', {
          method: POST,
          body: JSON.stringify(user),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        const data = res.json();
        console.log(data);
      } catch (err) {
        console.log(err)
      }
      

    }

  }
}

const LoginModal = () => (
  <div id="login-modal">
    <form>
      <label>Username: </label>
      <input id="username" type="text" />

      <label>Password: </label>
      <input id="password" type="text" />

      <button id="sign-in-btn"
        onClick={(e) => {handleClick(e)}}>
        Sign In
      </button>
      <button 
        id="cancel-sign-in-btn" 
        onClick={(e) => {handleClick(e)}}>
        Cancel
      </button>
    </form>
  </div>
)

export default LoginModal;