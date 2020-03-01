import React from 'react'
import Logo from '../../Logo/Logo'

import NavigationItems from '../NavigationItems/NavigationItems'

import styles from './SideDrawer.module.css'
import Auxilliary from '../../../hoc/Auxilliary'
import Backdrop from '../../UI/Backdrop/Backdrop'

const SideDrawer = (props) => {
    let addStyleClasses = [styles.SideDrawer, styles.Close]
    if (props.open) {
        addStyleClasses = [styles.SideDrawer, styles.Open]
    }
    return (
        <Auxilliary>
            <Backdrop show={props.open} clicked={props.close} />

            <div className={addStyleClasses.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div> 
                <nav className={styles.DesktopOnly}>
                    <NavigationItems />
                </nav>
            </div>
        </Auxilliary>
        
    )
}

export default SideDrawer