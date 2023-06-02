import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import FormDialogLogin from "./FormDialogLogin";
import FormDialogSignUp from "./FormDialogSignup";

export default function Navbar( ) {
  const [username, setUsername] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);
  const [isSignUpFormOpen, setSignUpFormOpen] = useState(false);
  const [isUserSignedUp, setIsUserSignedUp] = useState(false);

  // useEffect(()=>{
  //   FetchHelper({value: username, url: "http://localhost:8080/user/find-user-by-username-and-password/{username, password}", method: "GET"})
  //   .then(response => setUsername(response.username))
  // },[username])

  const handleUsernameChange = (newUsername) => {
    setUsername(newUsername);
  }

  let history = useNavigate();

  const handleLoginClick = () => {
      setLoginFormOpen(true);
      
      
  }

  const handleLogout = () => {
    history.push("/");
  }

  const handleSignUp = () => {
    setSignUpFormOpen(true);
  }

  return (
    <>

        Signed in as {username}
 
        <button onClick={handleLoginClick}>Login</button>
        {isLoginFormOpen && <FormDialogLogin onClose={() => setLoginFormOpen(false)} /> }
        <button onClick={handleLogout}>Logout</button>

        {!isUserSignedUp && <button onClick={handleSignUp}> Sign up</button> }
        
        {isSignUpFormOpen && <FormDialogSignUp onClose={() => setSignUpFormOpen(false)} 
        onUsernameChange={handleUsernameChange} onUserSignedUp={setIsUserSignedUp}/> }

    
    
    </>
  )
}
