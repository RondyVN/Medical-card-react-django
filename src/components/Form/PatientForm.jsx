import React from "react";
import {FormControl, TextField, Grid, FormLabel, Paper, RadioGroup, FormControlLabel, Radio} from "@mui/material";

const PatientForm = ({patient, setPatient}) => {
    const paperStyle = {padding: '30px 30px', width: 500, margin: "20px auto"}
    const marginTop = {marginTop: 5}
    const marginInput = {margin: 5}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <form>
                    <TextField fullWidth label='First name' placeholder="Enter your first name" variant="standard"
                               style={marginInput}
                               value={patient.first_name}
                               onChange={e => setPatient({...patient, first_name: e.target.value})}
                    />
                    <TextField fullWidth label='Last name' placeholder="Enter your last name" variant="standard"
                               style={marginInput}
                               value={patient.last_name}
                               onChange={e => setPatient({...patient, last_name: e.target.value})}
                    />
                    <FormControl component="fieldset" style={marginTop}>
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{display: 'initial'}}
                                    value={patient.sex}
                                    onChange={e => setPatient({...patient, sex: e.target.value})}
                        >
                            <FormControlLabel value="Female" control={<Radio/>} label="Female"/>
                            <FormControlLabel value="Male" control={<Radio/>} label="Male"/>
                        </RadioGroup>
                    </FormControl>
                    <TextField fullWidth id="date" label="Birthday" type="date" variant="standard" style={marginInput}
                               InputLabelProps={{
                                   shrink: true,
                               }}
                               value={patient.date_birth}
                               onChange={e => setPatient({...patient, date_birth: e.target.value})}
                    />
                    <TextField fullWidth label='Country' placeholder="Enter your country" variant="standard"
                               style={marginInput}
                               value={patient.country}
                               onChange={e => setPatient({...patient, country: e.target.value})}
                    />
                    <TextField fullWidth label='State' placeholder="Enter your state" variant="standard"
                               style={marginInput}
                               value={patient.state}
                               onChange={e => setPatient({...patient, state: e.target.value})}
                    />
                    <TextField fullWidth label='Address' placeholder="Enter your Address" variant="standard"
                               style={marginInput}
                               value={patient.address}
                               onChange={e => setPatient({...patient, address: e.target.value})}
                    />
                </form>
            </Paper>
        </Grid>
    )
}

export default PatientForm;