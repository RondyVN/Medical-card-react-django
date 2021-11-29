import React from 'react';
import OutPatient from "./OutPatient";
import CommentsPanel from "./comments/CommentsPanel";

const MainBlock = ({info, comments}) => {
    return (
        <div className="main-block">
            <OutPatient info={info}/>
            <CommentsPanel comments={comments}/>
        </div>
    );
};

export default MainBlock;