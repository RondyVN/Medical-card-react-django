import React from 'react';
import {useState} from "react";
import MyButton from "../UI/button/MyButton";
import Form from "../Form";
import {CreatePatient} from "../utils/CreatePatient";

const CreateForm = ({create}) => {
    const [post, setPost] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: '', address: ''});
    const [enableCreate, setEnableCreate] = useState(false)

    const addNewPost = async (e) => {
        e.preventDefault()
        CreatePatient(post, setPost, create)
    }


    return (
        <div>
            <Form post={post} setPost={setPost} setEnableCreate={setEnableCreate}>
                <div className="position-btn-to-createForm">
                    <MyButton disabled={enableCreate} onClick={addNewPost}>Add patient</MyButton>
                </div>
            </Form>
        </div>
    );
};

export default CreateForm;