import React from 'react'
import styles from '../DrawerToggle.module.css'

const drawSideDrawer = (props) => (
    <div class={styles.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)

export default drawSideDrawer