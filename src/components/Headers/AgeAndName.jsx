import React from 'react';
import Moment from "react-moment";
import {Typography} from "@mui/material";

const AgeAndName = ({patientInfo}) => {


    return (
        <>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {patientInfo.first_name} {patientInfo.last_name}
            </Typography>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {patientInfo.date_birth
                    ?<Moment fromNow ago>{patientInfo.date_birth}</Moment>
                    :<div>{patientInfo.date_birth}</div>
                }
            </Typography>
        </>
    );
};

export default AgeAndName;