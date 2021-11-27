import React, {useState} from 'react';
import Input from "../../UI/myinput/Input";
import MyButton from "../../UI/button/MyButton";
import axios from "axios";

const SendComment = ({create, comment, setComment}) => {

    const addComment = async (e) => {
        e.preventDefault()
        const postPat = await axios.post('http://127.0.0.1:8000/api-patients/comment-create/', comment)

        console.log(postPat.data)
        create(postPat.data)
        setComment({...comment, "comment": ""})
    }


    return (
        <div className="send-comment">
            <div className="input-sendMessage">
                <Input type="text" value={comment.comment}
                       onChange={e => setComment({...comment, "comment": e.target.value})}/>
            </div>
            {comment.comment
                ? <MyButton disabled={false} onClick={addComment}>Send comment</MyButton>
                : <MyButton disabled={true} onClick={addComment}>Send comment</MyButton>
            }
        </div>
    );
};

export default SendComment;