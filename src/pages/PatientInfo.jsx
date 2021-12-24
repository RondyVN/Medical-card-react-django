import React, {useEffect, useState} from 'react';
import Header from "../components/Headers/RightHeader";
import SendComment from "../components/RightPanel/Comments/SendComment";
import MainBlock from "../components/RightPanel/MainBlock";
import {useHistory, useParams} from "react-router-dom";
import PatientGet from "../API/PatientGet";
import CommentGet from "../API/CommentGet";
import {Button} from "@mui/material";
import ConfirmDeleteModal from "../components/RightPanel/ConfirmDeleteModal";

const PatientInfo = () => {
    const id = useParams().id
    const history = useHistory()
    const [patient, setPatient] = useState('')
    const [comments, setComments] = useState([])
    console.log(id)
    console.log(patient)
    useEffect(async () => {
        const patient = await PatientGet.detail(id)
        const comments = await CommentGet.getAll(id)
        setPatient(patient.data)
        //setComments(comments.data)
    }, [id])

    const createComment = (comment) => {
        setComments([comment, ...comments])
    }

    return (
        <div>
            <Header patientInfo={patient}>
                <Button disabled={!patient.id} onClick={() => history.push(`/patient/${patient.id}/edit`)} variant="contained">
                    Edit
                </Button>
                <ConfirmDeleteModal id={id}/>
            </Header>
            <MainBlock create={createComment} patientInfo={patient} comments={comments}>
                <SendComment create={createComment}/>
            </MainBlock>
        </div>
    );
};

export default PatientInfo;