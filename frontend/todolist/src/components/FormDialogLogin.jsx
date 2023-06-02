import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import { useRef, useState, useEffect} from 'react';
import axios from 'axios';
    

export default function FormDialogLogin({ onClose }) {
    const [open, setOpen] = useState(false);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userRole, setUserrole] = useState("NORMAL");


    const inputUsername = useRef("");
    const outputUsername = useRef("");

    const fetchData = async () => {
        try {
        const response = await axios.post("http://localhost:8080/user/add-user", 
        {
            username: username,
            password: password,
            userRole: userRole
        });
        console.log(response);
        } catch (error) {
            console.error(error);
        }

        handleClose();
    };
    
        // FetchHelper({ value: [username, password], url:"http://localhost:8080/user/add-user", method: "POST" })
        //     .then(userdata => {
        //     // setUsername(userdata.username);
        //     // setPassword(userdata.password);
        //     console.log((zus));
            
        // })
        // .catch(error => {
        //     // Handle any errors from the API request
        //     console.error(error);
        //   });
        
    
        

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

