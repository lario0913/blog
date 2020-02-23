import React from 'react'
import styles from './BuildControl.module.css'

function BuildControl(props) {
    return (
        <div className={styles.BuildControl}>
            <button className={styles.Label} >{props.label}</button>
            <button 
            className={styles.Less} 
            onClick={props.removeIngredient}
            disabled={props.disabledInfo}>
                Less
             </button>
            <button className={styles.More} onClick={props.added}>More</button>
        </div>
    )
}

export default BuildControl
