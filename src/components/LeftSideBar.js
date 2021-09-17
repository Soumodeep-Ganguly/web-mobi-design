import React from 'react';
import logo from './../logo.jpg';

const LeftSideBar = ({ active, setActive }) => {
    return (
        <div className="bg-light text-primary border-right" style={{width: '4.5rem', height: '100vh', float: 'left'}}>
            <a href="/" className="d-block p-3 link-dark text-decoration-none" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                <img src={logo} alt="Icon-only" height={50} width={50}/>
            </a>
            <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
                <li className="nav-item">
                    <a href="#event" onClick={() => setActive("event")} className={`${active === 'event'? "active":null} nav-link py-3`} aria-current="page" title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                        <i className="fas fa-chart-bar"></i>
                    </a>
                </li>
                <li>
                    <a href="#teams" onClick={() => setActive("teams")} className={`${active === 'teams'? "active":null} nav-link py-3`} title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                        <i className="fas fa-users"></i>
                    </a>
                </li>
                <li>
                    <a href="#analytics" onClick={() => setActive("analytics")} className={`${active === 'analytics'? "active":null} nav-link py-3`} title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                        <i className="fas fa-chart-line"></i>
                    </a>
                </li>
                <li>
                    <a href="#results" onClick={() => setActive("restlts")} className={`${active === 'restlts'? "active":null} nav-link py-3`} title data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                        <i className="fas fa-envelope-open-text"></i>
                    </a>
                </li>
            </ul>
        </div>

    )
}

export default LeftSideBar;