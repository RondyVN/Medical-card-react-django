import React, {useEffect, useState, useCallback, useContext} from 'react';
import Header from "./Header";
import MyButton from "../UI/button/MyButton";
import PatientFormEdit from "./PatientFormEdit";
import SendComment from "./comments/SendComment";
import MainBlock from "./MainBlock";
import PostService from "../../API/PostService";
import InfoOldName from "./InfoOldName";
import CreateForm from "./CreateForm";
import {CreateEnable} from "../../context";

const PatientInfo = ({id, deletePatient, updRightPanel, create}) => {
    const {createEnable} = useContext(CreateEnable)
    const [edit, setEdit] = useState(false)
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})
    const [info, setInfo] = useState('')
    const getInfoPatient = useCallback(async () => {
        const response = await PostService.DetailPatient(id)
        const response_comments = await PostService.CommentPatient(id)
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

    if (edit || createEnable) {
        return (
            <div>
                {!createEnable
                    ? <PatientFormEdit post={info} setPost={setInfo} setEdit={setEdit} updRightPanel={updRightPanel}
                                       deletePatient={deletePatient}/>
                    : <CreateForm create={create}/>
                }
            </div>
        )
    }


    return (
        <div>
            <Header>
                <InfoOldName info={info}/>
                <span><MyButton onClick={() => setEdit(true)}>Edit</MyButton></span>
                <span><MyButton onClick={deletePatient}>Delete</MyButton></span>
            </Header>
            <MainBlock info={info} comments={comments} create={createComment} comment={comment}
                       setComment={setComment}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;