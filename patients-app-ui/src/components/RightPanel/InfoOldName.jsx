import React from 'react';

const InfoOldName = ({info, old}) => {


    return (
        <span className="position-header-info">
            <span className="">{info.first_name} {info.last_name}</span>
            <span>Years old {old}</span>
        </span>
    );
};

export default InfoOldName;