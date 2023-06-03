import {  useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import FormDialogLogin from "./FormDialogLogin";
import FormDialogSignUp from "./FormDialogSignup";

export default function Navbar( ) {
  const [username, setUsername] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setSignUpFormOpen] = useState(false);
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const location = useLocation();

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  }

  let history = useNavigate();

  const handleLoginClick = () => {
      setLoginFormOpen(true);
  }

  const handleLogout = () => {
    setUsername("");
    setIsUserSignedUp(false);
    history("/");
  }

  const handleSignUp = () => {
    setSignUpFormOpen(true);
  }

  
  
  
  return (
    
    <>
    {location.pathname !== '/' && <button onClick={handleLogout}>Logout</button>}
    {username && location.pathname === '/' ? <>Logged in as {username}</> : <>Please log in or sign up!</>}
    
    {location.pathname === '/' && <button onClick={handleLoginClick}>Login</button>}
    {isLoginFormOpen && location.pathname === '/' && <FormDialogLogin onUsernameChange={handleUsernameChange} onClose={() => setLoginFormOpen(false)} />}
    
    {!isUserSignedUp && location.pathname === '/' && <button onClick={handleSignUp}> Sign up</button>}
    {isSignUpFormOpen && location.pathname === '/' && <FormDialogSignUp onClose={() => setSignUpFormOpen(false)} onUserSignedUp={setIsUserSignedUp} />}
  </>
  );
}
