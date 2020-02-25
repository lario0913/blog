import React, { Component } from 'react'
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary'

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.9
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad : 0,
            bacon : 0,
            cheese : 0,
            meat : 0
        },
        total : 4,
        orderNow: false,
        showSummary: false
    }

    addIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        const newCount = oldCount + 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = newCount

        const price = INGREDIENT_PRICES[type]
        const oldPrice = this.state.total
        const newPrice = oldPrice + price

        this.setState({
            ingredients: updatedIngredient, total: newPrice 
        })
        this.updateOrder(updatedIngredient)
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredients[type]
        if (oldCount === 0){
            return
        }
        const newCount = oldCount - 1
        const updatedIngredient = {...this.state.ingredients}
        updatedIngredient[type] = newCount

        const price = INGREDIENT_PRICES[type]
        const oldPrice = this.state.total
        const newPrice = oldPrice - price

        this.setState({
            ingredients: updatedIngredient, total: newPrice 
        })

        this.updateOrder(updatedIngredient)
    }

     updateOrder (ingredients) {
        const cum = Object.keys(ingredients)
                                .map(igKey =>{
                                    return ingredients[igKey]
                                })
                                .reduce((cum, cur) => {
                                    return cum + cur
                                }, 0)
        
        this.setState({orderNow : cum > 0})
    }

    summaryHandler = () => {
        this.setState({showSummary: true})
    }

    cancelOrder = () => {
        this.setState({showSummary: false})
    }

    ProceedWithOrder = () =>  {
        alert('You can Continue!')
    }

    render() {
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]  <= 0
        }

        return (
            <Auxilliary>
                <Burger ingredients = {this.state.ingredients} />

                <Modal show={this.state.showSummary}
                        clicked={this.cancelOrder}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        cancelOrder={this.cancelOrder}
                        proceedWithOrder={this.ProceedWithOrder}
                        price={this.state.total}
                     />
                </Modal>

                <div>Build Contorls</div>
                <BuildControls 
                addIngredient={this.addIngredientHandler}
                removeIngredient={this.removeIngredientHandler}
                disabledInfo={disabledInfo}
                price={this.state.total}
                updateOrder={this.state.orderNow}
                showsummary={this.summaryHandler}
                 />
            </Auxilliary>
        )
    }
}

export default BurgerBuilder
