import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormDialog from "./FormDialog";

export default function Navbar() {
  const [username, setUsername] = useState("");
  const [isLoginFormOpen, setLoginFormOpen] = useState(false);

  let history = useNavigate();

  const handleLoginClick = () => {
      setLoginFormOpen(true);
      
      
  }

  const handleLogout = () => {
    history.push("/");
  }

  return (
    <>

        Signed in as {username}  {/* todo */}
 
        <button onClick={handleLoginClick}>Login</button>
        {isLoginFormOpen && <FormDialog onClose={() => setLoginFormOpen(false)} /> }
        <button onClick={handleLogout}>Logout</button>
        

    
    </>
  )
}
