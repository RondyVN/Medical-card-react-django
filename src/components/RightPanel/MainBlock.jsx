import React from 'react';
import CommentsPanel from "./Comments/CommentsPanel";
import {
    Box,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import PatientCard from "./PatientCard";

const MainBlock = ({patientInfo, comments, children}) => {

    const paperStyle = {padding: '30px 30px', margin: "25px", borderRadius: 5}
    return (
        <Box sx={{flexGrow: 1}}>
            <Grid container sx={{justifyContent: "end", height: "100%"}}>
                <Grid item xs={6} md={4}>
                    <PatientCard paperStyle={paperStyle} patientInfo={patientInfo}/>
                </Grid>
                <Grid item xs={6} md={8}/*md={4}*/>
                    <Paper elevation={10} style={paperStyle}
                           sx={{
                               height: 450,
                               overflowY: "scroll",
                               wordWrap: "break-word",
                               maxWidth: 1000,
                               position: "relative",
                               bottom: 0
                           }}>
                        <Typography component="div">
                            <CommentsPanel comments={comments}/>
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={6} md={8}>
                    {children}
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainBlock;