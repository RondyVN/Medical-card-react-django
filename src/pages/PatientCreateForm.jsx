import React, {useContext} from 'react';
import {useState} from "react";
import PatientForm from "../components/Form/PatientForm";
import Header from "../components/Headers/RightHeader";
import {Patients} from "../context";
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";
import PatientPost from "../API/PatientPost";

const PatientCreateForm = () => {
    const history = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [patient, setPatient] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''});
    const addNewPatient = async () => {
        const patientCreated = await PatientPost.create(patient)
        setPatients([patient, ...patients])
        history.push(`/patient/${patientCreated.data.id}`)
    }

    //console.log(patient)
    return (
        <div>
            <Header>
                <Button
                    disabled={!patient.first_name || !patient.last_name || !patient.date_birth || !patient.sex || !patient.state || !patient.country || !patient.address }
                    onClick={addNewPatient}
                    variant="contained"
                    sx={{ml: 3}}
                    color="success"
                >
                    Add patient
                </Button>
                <Button
                    onClick={() => history.push(`/`)}
                    variant="contained"
                    sx={{ml: 3}}
                >
                    Cancel
                </Button>
            </Header>
            <PatientForm patient={patient} setPatient={setPatient} />
        </div>
    );
};

export default PatientCreateForm;