import Header from "../components/RightPanel/Header";
import FormPatientInfo from "../components/RightPanel/FormPatientInfo";
import React, {useContext, useEffect, useState} from "react";
import {Patients} from "../context";
import {useHistory, useParams} from "react-router-dom";
import PatientGet from "../API/PatientGet";
import PatientPost from "../API/PatientPost";
import {Button} from "@mui/material";
import ConfirmDeleteModal from "../components/RightPanel/ConfirmDeleteModal";

const PatientEditForm = () => {
    const {patients, setPatients} = useContext(Patients)
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

    return (
        <div>
            <Header>
                <Button onClick={savePatient} variant="contained" sx={{ml: 2}} color="success">
                    Save
                </Button>
                <Button disabled={!patients} onClick={() => history.push(`/patient/${id.id}`)} variant="contained" sx={{ml: 2}}>
                    Cancel
                </Button>
                <ConfirmDeleteModal id={id.id}/>
            </Header>
            <FormPatientInfo patient={patient} setPatient={setPatient}/>
        </div>
    );
};

export default PatientEditForm;