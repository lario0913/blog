import React from 'react'
import styles from './Toolbar.module.css'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import DrawSideDrawer from '../SideDrawer/DrawSideDrawer/DrawSideDrawer'

const toolbar = (props) => (

    <header className={styles.Toolbar}>
        
        <DrawSideDrawer clicked={props.toggleSideDrawer}/>
        <div className={styles.Logo}>
            <Logo />
        </div>
        <nav className={styles.DekstopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar