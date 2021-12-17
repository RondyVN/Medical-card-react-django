import React from 'react';
import OutPatientInfo from "./OutPatientInfo";
import CommentsPanel from "./comments/CommentsPanel";

const MainBlock = ({patientInfo, comments}) => {
    return (
        <div className="main-block">
            <OutPatientInfo patientInfo={patientInfo}/>
            <CommentsPanel comments={comments}/>
        </div>
    );
};

export default MainBlock;