import React, { useState } from "react";

import LoginModal from "./LoginModal.jsx";

function NavLogin() {
  const [showModal, setModal] = useState(false)
  function renderModal () {
    
  }

  
  return (
    <div>
      <button id="nav-login-btn" onClick={() => {setModal(true)}}>Login Button</button>
      {(showModal) ? <LoginModal /> : []}
    </div>
  )
  
}

export default NavLogin;