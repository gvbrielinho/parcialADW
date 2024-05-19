// SidebarComponent.jsx
import React, { useState } from 'react';
import styles from './sidebar.module.css';
import { MdOutlineMenu } from "react-icons/md";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const SidebarComponent = ({ onSidebarToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
        onSidebarToggle(!isOpen);
    };

    return (
        <div className={`${styles.sidebar} ${isOpen ? styles['sidebar-open'] : styles['sidebar-collapsed']}`}>
            <div className='col-12'>
                {isOpen ?
                    <React.Fragment>
                        <div className={styles['toggle-btn-opened']} onClick={toggleSidebar}>
                            <div className={`col-2 ${styles['burger-container']}`}><MdOutlineMenu /></div>
                            <div className={`col-10 ${styles['menu-title-container']}`}><span className={styles['menu-text']}><span>Menu</span></span></div>
                        </div>
                        <div className={styles['menu-items']}>
                            <div className={styles['item-row']}>
                                <div className={`col-2 ${styles['item-icon']}`}><AiOutlineMenuUnfold /></div>
                                <div className={`col-10 ${styles['menu-item']}`}>Home</div>
                            </div>
                            <div className={styles['item-row']}>
                                <div className={`col-2 ${styles['item-icon']}`}><AiOutlineMenuUnfold /></div>
                                <div className={`col-10 ${styles['menu-item']}`}>Contact</div>
                            </div>
                            <div className={styles['item-row']}>
                                <div className={`col-2 ${styles['item-icon']}`}><AiOutlineMenuUnfold /></div>
                                <div className={`col-10 ${styles['menu-item']}`}>About Us</div>
                            </div>

                        </div>
                    </React.Fragment>
                    :
                    <div className={`${styles['toggle-btn-container']}`}>
                        <div className={styles['toggle-btn']} onClick={toggleSidebar}>
                            <div className={`${styles['burger-icon-collapsed']}`}><MdOutlineMenu /></div>
                        </div>
                    </div>}
                <div className={`${styles['sidebar-content']} col`}>

                </div>
            </div>
        </div>
    );
};

export default SidebarComponent;