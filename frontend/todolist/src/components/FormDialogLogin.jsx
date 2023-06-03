import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
    

export default function FormDialogLogin({ onClose, onUsernameChange }) {
    
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserrole] = useState("NORMAL");

    const inputUsername = useRef("");
    const outputUsername = useRef("");

    let history = useNavigate();

    const fetchData = async () => {
        try {
        const response = await axios.get(`http://localhost:8080/user/check-username/${username}`, 
        {
            username: username,
        });
        console.log(response);
        if(response.status === 200) {
            onUsernameChange(username);  
            history("/user")
        }
        } catch (error) {
            console.error(error);
        }
        
        handleClose();

        
    };
        

    const handleInputUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleInputPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        setOpen(true);
    }, [open]);


    const handleClose = () => {
    setOpen(false);
    if(onClose) {
        onClose();
    }
    };

    return (
        <div>
            <form>
            <Dialog open={open} onClose={handleClose}>
                <DialogContent>
                    <DialogContentText>
                        Please enter your Username and Password!
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="username"
                        label="Username"
                        type="email"
                        fullWidth
                        variant="standard"
                        ref={inputUsername}
                        onChange={handleInputUsernameChange}
                    />

                    <TextField
                        autoFocus
                        margin="dense"
                        id="password"
                        label="Password"
                        type="email"
                        fullWidth
                        variant="standard"
                        ref={outputUsername}
                        onChange={handleInputPasswordChange}
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={fetchData}>Login</Button>
                </DialogActions>
            </Dialog>
            </form>
        </div>

    );
}

