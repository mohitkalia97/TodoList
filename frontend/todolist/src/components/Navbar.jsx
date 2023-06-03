import {  useState } from "react";
import { useNavigate } from "react-router-dom";

import FormDialogLogin from "./FormDialogLogin";
import FormDialogSignUp from "./FormDialogSignup";

export default function Navbar( ) {
  const [username, setUsername] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setSignUpFormOpen] = useState(false);
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  }

  let history = useNavigate();

  const handleLoginClick = () => {
      setLoginFormOpen(true);
  }

  const handleLogout = () => {
    history("/");
  }

  const handleSignUp = () => {
    setSignUpFormOpen(true);
  }

  
  

  return (
    <>
        {username ? <>Logged in as {username}</> : <>Please log in or sign up!</>}
 
        <button onClick={handleLoginClick}>Login</button>
        {isLoginFormOpen && <FormDialogLogin onUsernameChange={handleUsernameChange} onClose={() => setLoginFormOpen(false)} 
         /> }
        <button onClick={handleLogout}>Logout</button>

        {!isUserSignedUp && <button onClick={handleSignUp}> Sign up</button> }
        
        {isSignUpFormOpen && <FormDialogSignUp onClose={() => setSignUpFormOpen(false)} 
         onUserSignedUp={setIsUserSignedUp}
         />}
    </>
  )
}
