import React, {useState} from 'react';
import {List, ListItemButton, ListItemText} from "@mui/material";
import WomanIcon from "@mui/icons-material/Woman";
import ManIcon from "@mui/icons-material/Man";
import {useHistory} from "react-router-dom";


const PatientList = ({patients, firstId}) => {
    const history = useHistory()
    const [id, setId] = useState(firstId)

    const pushId = (event, index) => {
        history.push(`/patient/${index}`)
        setId(index)
    }

    return (
        <div>
            {patients.map(e =>
                <List component="nav" aria-label="secondary mailbox folder" key={e.id}>
                    <ListItemButton
                        selected={id === e.id}
                        onClick={(event) => pushId(event, e.id)}
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