import React, {useContext} from 'react';
import {List, ListItemButton, ListItemText} from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import {useHistory} from "react-router-dom";
import {Patients} from "../../context";


const PatientList = ({patients}) => {
    const history = useHistory()
    return (
        <div>
            {patients.map(e =>
                <List component="nav" aria-label="secondary mailbox folder" key={e.id} sx={{m: 1}}>
                    <ListItemButton sx={{borderRadius: 2, boxShadow: 3}}
                        onClick={() => history.push(`/patient/${e.id}`)}
                    >
                        <ListItemText primary={`${e.first_name} ${e.last_name}`}
                                      secondary={
                                          <React.Fragment>
                                              {e.date_birth}
                                          </React.Fragment>
                                      }
                        />
                        {e.sex === 'Female'
                            ? <WomanIcon sx={{ fontSize: 30 }}/>
                            : <ManIcon sx={{ fontSize: 30 }}/>
                        }
                    </ListItemButton>
                </List>
            )}
        </div>
    );
};

export default PatientList;