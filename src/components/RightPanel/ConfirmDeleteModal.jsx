import React, {useContext} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, DialogContentText} from "@mui/material";
import PatientPost from "../../API/PatientPost";
import PatientGet from "../../API/PatientGet";
import {Patients} from "../../context";
import {useHistory} from "react-router-dom";

const ConfirmDeleteModal = ({id}) => {
    const [open, setOpen] = React.useState(false);
    const {setPatients} = useContext(Patients)
    const history = useHistory()

    const deletePatient = async () => {
        await PatientPost.delete(id)
        const patients = await PatientGet.getAll()
        setPatients([...patients.data])
        history.push(`/patient/${patients.data[0].id}`)
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button color="error" variant="outlined" onClick={handleClickOpen} sx={{ml: 2}}>
                Delete
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"You really want to remove the patient?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        If you delete a patient, his data will be lost and you will not be able to recover it
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button color="error" onClick={deletePatient} autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ConfirmDeleteModal;