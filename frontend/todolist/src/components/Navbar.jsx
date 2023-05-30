import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDialog from "./FormDialog";

export default function Navbar() {
  const [username, setUsername] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);

  let navigate = useNavigate();

  const handleLoginClick = () => {
    setLoginFormOpen(true);
  };

  const handleClose = () => {
    setLoginFormOpen(false);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <>
      Signed in as {username}

      <button onClick={handleLoginClick}>Login</button>
      {isLoginFormOpen && (
        <FormDialog onClose={handleClose} />
      )}
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
