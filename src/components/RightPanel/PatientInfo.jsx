import React, {useEffect, useState, useCallback, useContext} from 'react';
import Header from "./Header";
import MyButton from "../UI/button/MyButton";
import SendComment from "./comments/SendComment";
import MainBlock from "./MainBlock";
import PostService from "../../API/PostService";
import InfoOldName from "./InfoOldName";
import {useHistory} from "react-router-dom";
import Delete from "../UI/Delete/Delete";
import {Patients} from "../../context";

const PatientInfo = ({id}) => {
    const router = useHistory()
    const {patient, setPatient} = useContext(Patients)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})
    const getInfoPatient = useCallback(async () => {
        //const response = await PostService.DetailPatient(id)
        const response_comments = await PostService.CommentPatient(id)
        //setPatient(response.data)
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
            <Header>
                <InfoOldName info={patient}/>
                <span><MyButton onClick={() => router.push(`/patient/${patient.id}/edit`)}>Edit</MyButton></span>
                <Delete/>
            </Header>
            <MainBlock info={patient} comments={comments} create={createComment} comment={comment}
                       setComment={setComment}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;