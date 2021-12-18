import {Button, TextField} from "@mui/material";
import PostService from "../../../API/PostService";

const SendComment = ({create, comment, setComment}) => {

    const addComment = async (e) => {
        e.preventDefault()
        const postComment = await PostService.CreateComment(comment)
        create(postComment.data)
        setComment({...comment, "comment": ""})
    }


    return (
        <div className="send-comment">
            <div className="input-sendMessage">
                <TextField onChange={e => setComment({...comment, "comment": e.target.value})}/>
            </div>

            <Button onClick={addComment} variant="outlined">
                Send comment
            </Button>
        </div>
    );
};

export default SendComment;