import React from 'react';
import {List, ListItemButton, ListItemText} from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import {useHistory} from "react-router-dom";


const PatientList = ({patients}) => {
    const history = useHistory()
    return (
        <nav>
            {patients.map(patient =>
                <List component="div" aria-label="secondary mailbox folder" key={patient.id} sx={{m: "0 5px 0 5px"}}>
                    <ListItemButton sx={{borderRadius: 2, boxShadow: 3}}
                        onClick={() => history.push(`/patient/${patient.id}`)}
                    >
                        <ListItemText primary={`${patient.first_name} ${patient.last_name}`}
                                      secondary={
                                          <React.Fragment>
                                              {patient.date_birth}
                                          </React.Fragment>
                                      }
                        />
                        {patient.sex === 'Female'
                            ? <WomanIcon sx={{ fontSize: 30 }}/>
                            : <ManIcon sx={{ fontSize: 30 }}/>
                        }
                    </ListItemButton>
                </List>
            )}
        </nav>
    );
};

export default PatientList;