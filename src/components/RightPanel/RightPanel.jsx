import React from 'react';

const RightPanel = (props) => {
    return (
        <div className="right-panel">
            {props.children}
        </div>
    );
};

export default RightPanel;