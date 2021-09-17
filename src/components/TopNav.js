import React from "react";

const TopNav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
            <div className="container-fluid">
                <a className="navbar-brand" href="#dashboard"><i className="fas fa-align-left"></i><span className="brandTitle">Admin Dashboard</span></a>
            </div>
        </nav>
    )
}

export default TopNav;