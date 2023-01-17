import React, { useState } from "react";

import LoginModal from "./LoginModal.jsx";

function NavLogin() {
  const [showModal, setModal] = useState(false);

  
  return (
    <div id="nav-login">
      <button id="nav-login-btn" onClick={() => {setModal(true)}}>Login</button>
      {(showModal) ? <LoginModal setModal={setModal} /> : []}
    </div>
  )
  
}

export default NavLogin;