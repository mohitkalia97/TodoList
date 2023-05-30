import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import React from 'react';
    

export default function FormDialog({ onClose }) {
    const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
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
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
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

