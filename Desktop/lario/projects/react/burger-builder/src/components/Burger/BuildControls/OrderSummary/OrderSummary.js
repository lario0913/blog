import React from 'react'
import Auxilliary from '../../../../hoc/Auxilliary'
import Buttons from '../../../UI/Buttons/Buttons'

const OrderSummary = (props) => {
    
    const summary = Object.keys(props.ingredients)
                    .map(igKey => {
                    return <li key={igKey}> {igKey}:  {props.ingredients[igKey]}</li>
                    })


    return (
        <Auxilliary >
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients</p>
            <ul>
                {summary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Proceed to checkout?</p>

            <Buttons btnType='Danger' clicked={props.cancelOrder}>CANCEL</Buttons>
            <Buttons btnType='Success' clicked={props.proceedWithOrder}>CONTINUE</Buttons>
        </Auxilliary>
    )
}

export default OrderSummary
