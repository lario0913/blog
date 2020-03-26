import React from 'react'
import styles from './Order.module.css'

function Order(props) {
    const ingredients = []

    for (let ingredientName in props.ingredients){
        ingredients.push ({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        })
    }

    const ingredientOutput = ingredients.map(ig => {
    return <span> {ig.name} ({ig.amount}) <br/></span>
    })

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredientOutput} </p>
    <p>Price: <strong>{(props.price).toFixed(2)}</strong></p>
        </div>
    )
}

export default Order
