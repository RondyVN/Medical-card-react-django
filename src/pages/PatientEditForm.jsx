import Header from "../components/Headers/RightHeader";
import PatientForm from "../components/Form/PatientForm";
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
    const params = useParams()
    const [patient, setPatient] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''})

    useEffect(async () => {
        const patient = await PatientGet.detail(params.id)
        setPatient(patient.data)
    }, [])
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
                <Button disabled={!patients} onClick={() => history.push(`/patient/${params.id}`)} variant="contained" sx={{ml: 2}}>
                    Cancel
                </Button>
                <ConfirmDeleteModal id={params.id}/>
            </Header>
            <PatientForm patient={patient} setPatient={setPatient}/>
        </div>
    );
};

export default PatientEditForm;