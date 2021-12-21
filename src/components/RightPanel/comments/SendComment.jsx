import {Button, FormLabel, Paper, TextField} from "@mui/material";
import PostService from "../../../API/PostService";
import SendIcon from "@mui/icons-material/Send";
import React from "react";

const SendComment = ({create, comment, setComment}) => {

    const addComment = async (e) => {
        e.preventDefault()
        const postComment = await PostService.CreateComment(comment)
        create(postComment.data)
        setComment({...comment, "comment": ""})
    }

    console.log(comment)

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