import React from 'react';
import Moment from "react-moment";
import {Typography} from "@mui/material";

const InfoOldName = ({someInfo}) => {


    return (
        <>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {someInfo.first_name} {someInfo.last_name}
            </Typography>
            <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                {someInfo.date_birth
                    ?<Moment fromNow ago>{someInfo.date_birth}</Moment>
                    :<div>{someInfo.date_birth}</div>
                }
            </Typography>
        </>
    );
};

export default InfoOldName;