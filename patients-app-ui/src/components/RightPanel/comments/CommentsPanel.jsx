import React from 'react';
import CommentItem from "./CommentItem";

const CommentsPanel = ({comments}) => {
    if (!comments.length) {
        return (
            <div className="comment-panel">
                <h1 style={{textAlign: 'center'}}>
                    There are no comments yet
                </h1>
            </div>
        )
    }
    return (
        <div className="comment-panel">
            {comments.map(e =>
                <div className="comment" key={e.id}><CommentItem com={e}/></div>
            )}
        </div>
    );
};

export default CommentsPanel;