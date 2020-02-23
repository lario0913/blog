import React from 'react'

import styles from './Burger.module.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const Burger = (props) =>{
    let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])]
        .map((_, i) => <BurgerIngredients key={igKey + i} type={igKey} />)
    })
    .reduce((prevVal, nextValue)=>{
        return prevVal.concat(nextValue)
    }, [])

    if (transformedIngredients.length === 0){
        transformedIngredients = <p> Start Adding Burger ingredients</p>
    }

    return (
        <div className={styles.burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type= "bread-bottom" />
        </div>
    )
}

export default Burger
