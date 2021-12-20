import React, {useContext, useEffect, useState} from 'react';
import Header from "../components/RightPanel/Header";
import SendComment from "../components/RightPanel/comments/SendComment";
import MainBlock from "../components/RightPanel/MainBlock";
import {useHistory, useParams} from "react-router-dom";
import PatientGet from "../API/PatientGet";
import CommentGet from "../API/CommentGet";
import PatientPost from "../API/PatientPost";
import {Button, Popper} from "@mui/material";
import {Patients} from "../context";
import ConfirmDeleteModal from "../components/RightPanel/ConfirmDeleteModal";

const PatientInfo = () => {
    const id = useParams().id
    const history = useHistory()
    const {setPatients} = useContext(Patients)
    const [patient, setPatient] = useState('')
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})

    useEffect(async () => {
        const patient = await PatientGet.detail(id)
        const comments = await CommentGet.getAll(id)
        setPatient(patient.data)
        setComments(comments.data)
        setComment({comment: '', comment_id: id})
    }, [id])

    const createComment = (comment) => {
        setComments([comment, ...comments])
    }

    const deletePatient = async () => {
        await PatientPost.delete(id)
        const patients = await PatientGet.getAll()
        setPatients([...patients.data])
        history.push(`/patient/${patients.data[0].id}`)
    }

    return (
        <div>
            <Header someInfo={patient}>
                <Button disabled={!patient.id} onClick={() => history.push(`/patient/${patient.id}/edit`)} variant="outlined">
                    Edit
                </Button>
                <ConfirmDeleteModal id={id}/>
            </Header>
            <MainBlock patientInfo={patient} comments={comments}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;