import React from 'react';
import CommentItem from "../CommentItem";

const CommentsPanel = ({comments}) => {
    return (
        <div className="comment-panel">
            {comments.map(e =>
                <div className="comment" key={e.id}><CommentItem com={e}/></div>
            )}
        </div>
    );
};

export default CommentsPanel;