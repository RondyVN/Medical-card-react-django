import React from 'react';
import Moment from "react-moment";

const InfoOldName = ({info}) => {


    return (
        <span className="position-header-info">
            <span className="">{info.first_name} {info.last_name}</span>
            <span><Moment fromNow ago>{info.date_birth}</Moment></span>
        </span>
    );
};

export default InfoOldName;