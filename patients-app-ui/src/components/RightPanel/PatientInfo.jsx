import React, {useEffect, useState, useCallback} from 'react';
import axios from "axios";
import Header from "./Header";
import MyButton from "../UI/button/MyButton";
import PatientFormEdit from "./PatientFormEdit";
import SendComment from "./comments/SendComment";
import MainBlock from "./MainBlock";

const PatientInfo = ({id, edit, setEdit, deletePatient, updRightPanel}) => {

    const [comments, setComments] = useState([])
    const [comment, setComment] = useState({"comment": "", "comment_id": ""})

    const [info, setInfo] = useState('')
    const getInfoPatient = useCallback(async () => {
        const response = await axios.get(`http://127.0.0.1:8000/api-patients/patient-detail/${id}/`)
        const response_comments = await axios.get(`http://127.0.0.1:8000/api-patients/comments-detail/${id}/`)
        setInfo(response.data)
        setComments(response_comments.data)
        setComment({...comment, "comment_id": id})
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
                <span><MyButton onClick={() => setEdit(true)}>Edit</MyButton></span>
                <span><MyButton onClick={deletePatient}>Delete</MyButton></span>
            </Header>
            <MainBlock info={info} comments={comments}/>
            <SendComment create={createComment} comment={comment} setComment={setComment}/>
        </div>
    );
};

export default PatientInfo;