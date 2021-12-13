import React, {useEffect, useState, useCallback, useContext} from 'react';
import Header from "../components/RightPanel/Header";
import MyButton from "../components/UI/button/MyButton";
import SendComment from "../components/RightPanel/comments/SendComment";
import MainBlock from "../components/RightPanel/MainBlock";
import PostService from "../API/PostService";
import InfoOldName from "../components/RightPanel/InfoOldName";
import {useHistory, useParams} from "react-router-dom";
import Delete from "../components/UI/Delete/Delete";
import {Patients} from "../context";

const PatientInfo = () => {
    const id = useParams().id
    const history = useHistory()
    const {patient, setPatient} = useContext(Patients)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})
    const getInfoPatient = useCallback(async () => {
        const response = await PostService.DetailPatient(id)
        const response_comments = await PostService.CommentPatient(id)
        setPatient(response.data)
        setComments(response_comments.data)
        setComment({comment: '', comment_id: id})
    }, [id])

    const createComment = async (comment) => {
        setComments([comment, ...comments])
    }

    useEffect(() => {
        getInfoPatient()
    }, [getInfoPatient])


    return (
        <div>
            <Header someInfo={patient}>
                <MyButton onClick={() => history.push(`/patient/${patient.id}/edit`)}>Edit</MyButton>
                <Delete/>
            </Header>
            <MainBlock info={patient} comments={comments} create={createComment} comment={comment}
                       setComment={setComment}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;