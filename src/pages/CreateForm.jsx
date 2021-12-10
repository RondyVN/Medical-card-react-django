import React, {useContext} from 'react';
import {useState} from "react";
import MyButton from "../components/UI/button/MyButton";
import Form from "../components/Form";
import Header from "../components/RightPanel/Header";
import {CreateEnable} from "../context";
import {useHistory} from "react-router-dom";
import PostService from "../API/PostService";

const CreateForm = () => {
    const route = useHistory()
    const {patients, setPatients} = useContext(CreateEnable)
    const [post, setPost] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''});
    const {setCreateEnable} = useContext(CreateEnable)
    const addNewPatient = async (e) => {
        e.preventDefault()
        const postPat = await PostService.CreatePatient(post)
        setPatients([postPat.data, ...patients])
        route.push(`/patient/${postPat.data.id}`)
    }

    return (
        <div>
            <Header>
                <span onClick={() => setCreateEnable(false)}><MyButton onClick={addNewPatient}>Add patient</MyButton></span>
                <span><MyButton onClick={() => route.push('/')}>Cancel</MyButton></span>
            </Header>
            <Form post={post} setPost={setPost} />
        </div>
    );
};

export default CreateForm;