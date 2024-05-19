// ContentComponent.jsx
import React from 'react';
import styles from './content.module.css';

const ContentComponent = ({ isSidebarOpen }) => {

    return (
        <div className={`${styles.content} ${isSidebarOpen ? styles['sidebar-open'] : ''}`}>
            <div>
                <h2>Home Page</h2>
                <p>Welcome to the home page.</p>
            </div>
        </div>
    );
};

export default ContentComponent;