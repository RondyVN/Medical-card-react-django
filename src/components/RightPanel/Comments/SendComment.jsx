import {Button, FormLabel, Paper, TextField} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, {useState} from "react";
import CommentPost from "../../../API/CommentPost";

const SendComment = ({create, id}) => {
    const [comment, setComment] = useState({"comment": "", "comment_id": id})
    const addComment = async (e) => {
        e.preventDefault()
        const postComment = await CommentPost.create(comment)
        create(postComment.data)
        setComment({...comment, "comment": ""})
    }

    return (
        <FormLabel>
            <Paper elevation={20} sx={{p: "20px 20px", m: "0 25px 0 25px"}}>
                <TextField
                    fullWidth
                    label="Send Comment"
                    value={comment.comment}
                    onChange={e => setComment({...comment, "comment": e.target.value})}
                    InputProps={{
                        endAdornment:
                            <Button disabled={!comment.comment} onClick={addComment} variant="outlined"
                                    endIcon={<SendIcon/>}>
                                Send
                            </Button>
                    }}
                />
            </Paper>
        </FormLabel>
    );
};

export default SendComment;