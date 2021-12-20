import Header from "../components/RightPanel/Header";
import FormPatientInfo from "../components/RightPanel/FormPatientInfo";
import React, {useContext, useEffect, useState} from "react";
import {Patients} from "../context";
import {useHistory, useParams} from "react-router-dom";
import PatientGet from "../API/PatientGet";
import PatientPost from "../API/PatientPost";
import {Button} from "@mui/material";

const PatientEditForm = () => {
    const {setPatients} = useContext(Patients)
    const history = useHistory()
    const id = useParams()
    const [patient, setPatient] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})

    useEffect(async () => {
        const patient = await PatientGet.detail(id.id)
        setPatient(patient.data)
    }, [id.id])

    const savePatient = async () => {
        await PatientPost.update(patient)
        const patients = await PatientGet.getAll()
        setPatients([...patients.data])
        history.push(`/patient/${patient.id}`)
    }

    const deletePatient = async () => {
        await PatientPost.delete(id.id)
        const patients = await PatientGet.get()
        setPatients([...patients.data])
        history.push(`/patient/${patients.data[0].id}`)
    }

    return (
        <div>
            <Header>
                <Button onClick={savePatient} variant="outlined" sx={{ml: 3, height: 40}}>
                    Save
                </Button>
                <Button onClick={() => history.push(`/patient/${patient.id}`)} variant="outlined" sx={{ml: 3, height: 40}}>
                    Cancel
                </Button>
                <Button onClick={deletePatient} variant="outlined" sx={{ml: 3, height: 40}} color="error">
                    Delete
                </Button>
            </Header>
            <FormPatientInfo patient={patient} setPatient={setPatient}/>
        </div>
    );
};

export default PatientEditForm;