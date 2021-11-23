import React from 'react';
import {useState} from "react";
import Input from "./UI/myinput/Input";
import MyButton from "./UI/button/MyButton";
import axios from "axios";

const CreateForm = ({create}) => {
    const [post, setPost] = useState({first_name: '', last_name: '', date_birth: '', weight: '', growth: ''});

    const addNewPost = async (e) => {
        e.preventDefault()

        const postPat = await axios.post('http://127.0.0.1:8000/api-patients/patient-create/', post)

        create(postPat.data)
        setPost({first_name: '', last_name: '', date_birth: '', weight: 0, growth: 0})
    }


    return (
        <div>
            <form>
                <Input
                    value={post.first_name}
                    onChange={e => setPost({...post, first_name: e.target.value})}
                    type="text"
                    placeholder="First Name"
                />
                <Input
                    value={post.last_name}
                    onChange={e => setPost({...post, last_name: e.target.value})}
                    type="text"
                    placeholder="Last Name"/>
                <Input
                    value={post.growth}
                    onChange={e => setPost({...post, growth: e.target.value})}
                    type="number"
                    placeholder="Growth"/>
                <Input
                    value={post.weight}
                    onChange={e => setPost({...post, weight: e.target.value})}
                    type="number"
                    placeholder="Weight"/>
                <Input
                    value={post.date_birth}
                    onChange={e => setPost({...post, date_birth: e.target.value})}
                    type="date"
                    placeholder="Last Name"/>
                <MyButton onClick={addNewPost}>Создать пост</MyButton>

            </form>
        </div>
    );
};

export default CreateForm;