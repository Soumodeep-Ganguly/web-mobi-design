import React from 'react';
import logo from './../logo.svg';

const RightSideBar = ({ active, setActive }) => {
    return (
        <div className="bg-light text-primary border-left" style={{width: '4.5rem', height: '100vh', right: 0, float: 'right', position: 'relative'}}>
            <a href="#profile" className="d-block p-3 link-dark text-decoration-none" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <img src={logo} alt="Icon-only"/>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#notify" onClick={() => setActive("notify")} className={`${active === 'notify'? "active":null} nav-link py-3`} aria-current="page" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <i className="fas fa-bell fa-xs"></i>
                    </a>
                </li>
                <li>
                    <a href="#chat" onClick={() => setActive("chat")} className={`${active === 'chat'? "active":null} nav-link py-3`} title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i className="fas fa-comments fa-xs"></i>
                    </a>
                </li>
                <li>
                    <a href="#settings" onClick={() => setActive("settings")} className={`${active === 'settings'? "active":null} nav-link py-3`} title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <i className="fas fa-cog fa-xs"></i>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default RightSideBar;