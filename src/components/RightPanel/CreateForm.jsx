import React, {useContext} from 'react';
import {useState} from "react";
import MyButton from "../UI/button/MyButton";
import Form from "../Form";
import {CreatePatient} from "../utils/CreatePatient";
import Header from "./Header";
import {CreateEnable} from "../../context";

const CreateForm = ({create}) => {
    const [post, setPost] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''});
    const {setCreateEnable} = useContext(CreateEnable)
    const addNewPatient = async (e) => {
        CreatePatient(post, setPost, create)
    }


    return (
        <div>
            <Header>
                <span onClick={() => setCreateEnable(false)}><MyButton onClick={addNewPatient}>Add patient</MyButton></span>
                <span><MyButton onClick={() => setCreateEnable(false)}>Cancel</MyButton></span>
            </Header>
            <Form post={post} setPost={setPost} />
        </div>
    );
};

export default CreateForm;