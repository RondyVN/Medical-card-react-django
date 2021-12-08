import React, {useEffect, useState, useCallback} from 'react';
import Header from "./Header";
import MyButton from "../UI/button/MyButton";
import PatientFormEdit from "./PatientFormEdit";
import SendComment from "./comments/SendComment";
import MainBlock from "./MainBlock";
import PostService from "../../API/PostService";
import {getOld} from "../utils/CreatePatient";
import InfoOldName from "./InfoOldName";
import {useParams} from "react-router-dom";

const PatientInfo = ({id, edit, setEdit, deletePatient, updRightPanel}) => {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})
    const [old, setOld] = useState(0)

    const [info, setInfo] = useState('')
    const getInfoPatient = useCallback(async () => {
        const response = await PostService.DetailPatient(id)
        const response_comments = await PostService.CommentPatient(id)
        const old = getOld(response.data.date_birth)
        setOld(old)
        setInfo(response.data)
        setComments(response_comments.data)
        setComment({comment: '', comment_id: id})
    }, [id])


    const createComment = async (comment) => {
        setComments([comment, ...comments])
    }

    useEffect(() => {
        getInfoPatient()
    }, [edit, getInfoPatient])

    if (edit) {
        return (
            <div>
                <PatientFormEdit post={info} setPost={setInfo} setEdit={setEdit} updRightPanel={updRightPanel}
                                 deletePatient={deletePatient}/>
            </div>
        )
    }

    return (
        <div>
            <Header>
                <InfoOldName info={info} old={old}/>
                <span><MyButton onClick={() => setEdit(true)}>Edit</MyButton></span>
                <span><MyButton onClick={deletePatient}>Delete</MyButton></span>
            </Header>
            <MainBlock info={info} comments={comments} create={createComment} comment={comment} setComment={setComment}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;