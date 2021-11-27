import React from 'react';
import {useState} from "react";
import MyButton from "../UI/button/MyButton";
import axios from "axios";
import Form from "../Form";

const CreateForm = ({create}) => {
    const [post, setPost] = useState({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: ''});

    const addNewPost = async (e) => {
        e.preventDefault()

        const postPat = await axios.post('http://127.0.0.1:8000/api-patients/patient-create/', post)

        create(postPat.data)
        setPost({first_name: '', last_name: '', date_birth: '', sex: '', state: '', country: ''})
    }


    return (
        <div>
            <Form post={post} setPost={setPost}>
                <div className="position-btn-to-createForm">
                    <MyButton onClick={addNewPost}>Add patient</MyButton>
                </div>
            </Form>
        </div>
    );
};

export default CreateForm;