import React, {useContext} from 'react';
import {useState} from "react";
import Form from "../components/Form";
import Header from "../components/RightPanel/Header";
import {Patients} from "../context";
import {useHistory} from "react-router-dom";
import PostService from "../API/PostService";
import {Button} from "@mui/material";

const PatientCreateForm = () => {
    const history = useHistory()
    const {patients, setPatients} = useContext(Patients)
    const [patient, setPatient] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''});
    const addNewPatient = async () => {
        const patient = await PostService.CreatePatient(patient)
        setPatients([patient.data, ...patients])
        history.push(`/patient/${patient.data.id}`)
    }

    return (
        <div>
            <Header>
                <Button
                    onClick={addNewPatient}
                    variant="outlined"
                    sx={{ml: 3, height: 40}}
                >
                    Add patient
                </Button>
                <Button
                    onClick={() => history.push(`/`)}
                    variant="outlined"
                    sx={{ml: 3, height: 40}}
                >
                    Cancel
                </Button>
            </Header>
            <Form patient={patient} setPatient={setPatient} />
        </div>
    );
};

export default PatientCreateForm;