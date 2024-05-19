// HeaderComponent.jsx
import React from 'react';
import './header.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './header.module.css';

const HeaderComponent = ({ isSidebarOpen, onSidebarToggle }) => {
    const handleToggleSidebar = () => {
        onSidebarToggle(!isSidebarOpen);
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles['navbar-custom']}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href={"_blank"}>Navbar</a>
                <button className={`${styles['nav-btn']} navbar-toggler`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation"
                    onClick={handleToggleSidebar}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="_blank">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="_blank">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="_blank">Pricing</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;