import React, {useContext} from 'react';
import {useState} from "react";
import FormPatientInfo from "../components/RightPanel/FormPatientInfo";
import Header from "../components/RightPanel/Header";
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
        setPatients([patientCreated.data, ...patients])
        history.push(`/patient/${patientCreated.data.id}`)
    }

    return (
        <div>
            <Header>
                <Button
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
            <FormPatientInfo patient={patient} setPatient={setPatient} />
        </div>
    );
};

export default PatientCreateForm;