import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const [username, setUsername] = useState("");
  let history = useNavigate();

  const handleLogout = () => {
    history.push("/");
  }

  return (
    <>

        Signed in as {username}  {/* todo */}
 
        <button>Login</button>
        <button onClick={handleLogout}>Logout</button>
        

    
    </>
  )
}
