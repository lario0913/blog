import React from 'react'
import styles from './Buttons.module.css'

const Buttons = (props) => 
            (
        <button 
            onClick={props.clicked}
            className={[styles.Button, styles[props.btnType]].join(' ')}>
                {props.children}
        </button>
    )


export default Buttons
