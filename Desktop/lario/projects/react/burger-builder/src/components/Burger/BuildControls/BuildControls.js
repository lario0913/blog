import React from 'react'

import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'


const controls = [
    {label : 'Salad', type: 'salad'},
    {label : 'Bacon', type: 'bacon'},
    {label : 'Cheese', type: 'cheese'},
    {label : 'Meat', type: 'meat'}
]

const BuildControls = (props) => {
    return (
        <div className={styles.BuildControls}>

            <p>Current Price <strong>{props.price.toFixed(2)}</strong></p>

            {controls.map(cntl => (
                <BuildControl 
                    key={cntl.label}
                    label={cntl.label}
                    added={() => props.addIngredient(cntl.type)}
                    removeIngredient={()=>props.removeIngredient(cntl.type)}
                    disabledInfo={props.disabledInfo[cntl.type]}
                    />
            ))}

            <button className={styles.OrderButton} disabled={!props.updateOrder}>ORDER NOW</button>
        </div>
    )
}

export default BuildControls
