import React from 'react';


const Header = ({children}) => {
    return (
        <header className="header-right-panel">
            <div className="placing-btn">

                {children}
            </div>
        </header>
    );
};

export default Header;