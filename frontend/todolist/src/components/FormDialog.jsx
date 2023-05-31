import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import { useRef, useState, useEffect} from 'react';
import FetchHelper from '../FetchHelper';
    

export default function FormDialog({ onClose }) {
    const [open, setOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const inputUsername = useRef("");
    const outputUsername = useRef("");

    useEffect(()=> {
        FetchHelper({ value: username,  })
    },[open])

    //TODO: POSTE USERNAME PASSWOD USW AN DAS BACKEND

    const handleInputUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleInputPasswordChange = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        setOpen(true);
    }, []);


    const handleClose = () => {
    setOpen(false);
    if(onClose) {
        onClose();
    }
    };

    return (
        <div>
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
                <Button onClick={handleClose}>Login</Button>
            </DialogActions>
        </Dialog>
    </div>
    );
}

