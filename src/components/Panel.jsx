import React from 'react';

const Panel = ({children}) => {
    return (
        <div className="panels">
            {children}
        </div>
    );
};

export default Panel;