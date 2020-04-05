import React from 'react'
import styles from './Buttons.module.css'

const Buttons = (props) => 
            (
        <button 
            disabled={props.disabled}
            onClick={props.clicked}
            className={[styles.Button, styles[props.btnType]].join(' ')}>
                {props.children}
        </button>
    )


export default Buttons
