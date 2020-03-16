import React from 'react'
import styles from './checkoutSummary.module.css'

import Burger from '../../Burger/Burger'
import Buttons from '../../UI/Buttons/Buttons'

const checkoutSummary = (props) => {

    return(
        <div className={styles.CheckoutSummary}>
            <h2>Have a Yummie Taste !!!</h2>
            <div style={{width: "100%", margin: "auto"}}>
                <Burger ingredients={props.ingredients} />
            </div>

            <Buttons 
                clicked = {props.orderSummaryCancel}
                btnType="Danger">CANCEL
            </Buttons>
            <Buttons 
                clicked = {props.orderSummarySuccess}
                btnType="Success">CONTINUE
            </Buttons>
        </div>
    )
}

export default checkoutSummary