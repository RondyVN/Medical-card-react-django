import React from 'react';

const CommentItem = (props) => {
    return (
        <div>
            <div className="first-last-name">
                {props.com.username} {props.com.comment}
            </div>
            <div className="date-patient">
                {props.com.date_create}
            </div>
        </div>
    );
};

export default CommentItem;