import React from 'react';
import {Paper, Typography} from "@mui/material";

const PatientCard = ({patientInfo, paperStyle}) => {
    if (!patientInfo) {
        return (
            <Paper elevation={20} style={paperStyle}>
                <div>Waiting</div>
            </Paper>
        )
    }

    return (
        <Paper elevation={20} style={paperStyle} data-testid="patientcard">
            <Typography component="div" variant="h5">
                First Name: {patientInfo.first_name}
            </Typography>
            <Typography component="div" variant="h5">
                Last Name: {patientInfo.last_name}
            </Typography>
            <Typography component="div" variant="h5">
                Country: {patientInfo.country}
            </Typography>
            <Typography component="div" variant="h5">
                State: {patientInfo.state}
            </Typography>
            <Typography component="div" variant="h5">
                Address: {patientInfo.address}
            </Typography>
        </Paper>
    );
};

export default PatientCard;