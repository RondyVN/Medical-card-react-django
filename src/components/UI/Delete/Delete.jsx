import React, {useContext} from 'react';
import MyButton from "../button/MyButton";
import {Patients} from "../../../context";
import PostService from "../../../API/PostService";
import {useHistory} from "react-router-dom";

const Delete = () => {

    const router = useHistory()
    const {patient, setPatients} = useContext(Patients)
    const deletePatient = async () => {
        await PostService.DeletePatient(patient.id)
        const pats = await PostService.getPatient()
        setPatients([...pats.data])
        router.push(`/patient/${pats.data[0].id}`)
    }

    return (
        <span>
            <MyButton onClick={deletePatient}>Delete</MyButton>
        </span>
    );
};

export default Delete;