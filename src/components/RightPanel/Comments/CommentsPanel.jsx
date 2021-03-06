import React from 'react';
import {Grid, Paper, Divider} from "@mui/material";
import {List} from "@mui/icons-material";

const CommentsPanel = ({comments}) => {
    if (!comments?.length) {
        return (
            <div className="comment-panel">
                <h1 style={{textAlign: 'center'}}>
                    There are no comments yet
                </h1>
            </div>
        )
    }
    return (
        <Paper style={{padding: "20px 20px"}}>
            {comments.map((comment) =>
                <div key={comment.id}>
                    <Grid container wrap="nowrap" spacing={2}>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                            <h4 style={{margin: 0, textAlign: "left"}}>Doctor</h4>
                            <p>
                                {comment.comment}
                            </p>
                            <p style={{textAlign: "left", color: "gray"}}>
                                {comment.date_create}
                            </p>
                        </Grid>
                    </Grid>
                    <Divider variant="fullWidth" style={{margin: "30px 0"}}/>
                </div>
            )}
        </Paper>
    );
};

export default CommentsPanel;