
import {AddComment} from "../../utils/AddComment";
import {Button, TextField} from "@mui/material";

const SendComment = ({create, comment, setComment}) => {

    const addComment = async (e) => {
        e.preventDefault()
        AddComment(comment, setComment, create)
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