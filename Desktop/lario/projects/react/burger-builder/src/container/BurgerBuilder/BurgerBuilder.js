import React, { Component } from 'react'
import {connect} from 'react-redux'

import axios from '../../axios-order/axios-order'
import Auxilliary from '../../hoc/Auxilliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/BuildControls/OrderSummary/OrderSummary'
import Spinner from '../../components/UI/Spinner/Spinner'
import withErrorHandler from '../../hoc/withErrorHandler'
import * as actionTypes from '../../store/action'


class BurgerBuilder extends Component {
    state = {
        total : 4,
        // orderNow: false,
        showSummary: false,
        loading : false,
        error : false
    }

    componentDidMount () {
        axios.get('https://burger-builder-cfa8a.firebaseio.com/ingredients.json')
            .then(res => {
                this.setState({ingredients : res.data})
            })
            .catch(error => {
                this.setState({error : true})
            })
    }

    // addIngredientHandler = (type) =>{
    //     const oldCount = this.state.ingredients[type]
    //     const newCount = oldCount + 1
    //     const updatedIngredient = {...this.state.ingredients}
    //     updatedIngredient[type] = newCount

    //     const price = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.total
    //     const newPrice = oldPrice + price

    //     this.setState({
    //         ingredients: updatedIngredient, total: newPrice 
    //     })
    //     this.updateOrder(updatedIngredient)
    // }

    // removeIngredientHandler = (type) =>{
    //     const oldCount = this.state.ingredients[type]
    //     if (oldCount === 0){
    //         return
    //     }
    //     const newCount = oldCount - 1
    //     const updatedIngredient = {...this.state.ingredients}
    //     updatedIngredient[type] = newCount

    //     const price = INGREDIENT_PRICES[type]
    //     const oldPrice = this.state.total
    //     const newPrice = oldPrice - price

    //     this.setState({
    //         ingredients: updatedIngredient, total: newPrice 
    //     })

    //     this.updateOrder(updatedIngredient)
    // }

     updateOrder (ingredients) {
        const cum = Object.keys(ingredients)
                                .map(igKey =>{
                                    return ingredients[igKey]
                                })
                                .reduce((cum, cur) => {
                                    return cum + cur
                                }, 0)
        
        return  cum > 0
    }

    summaryHandler = () => {
        this.setState({showSummary: true})
    }

    cancelOrder = () => {
        this.setState({showSummary: false})
    }

    ProceedWithOrder = () =>  {
        this.props.history.push('/checkout')
    }

    render() {
        const disabledInfo = {...this.props.ings}
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key]  <= 0
        }
        

        let burger = this.state.error ? <p>Data cant be loaded</p> : <Spinner />
        let orderSUmmary = null
        if (this.props.ings){
            burger = <Auxilliary>
                        <Burger ingredients = {this.props.ings} />
                        <BuildControls 
                            addIngredient={this.props.onIngredientAdded}
                            removeIngredient={this.props.onIngredientRemoved}
                            disabledInfo={disabledInfo}
                            price={this.props.price}
                            updateOrder={this.updateOrder(this.props.ings)}
                            showsummary={this.summaryHandler}
                        />
                    </Auxilliary>

            orderSUmmary = <OrderSummary 
            ingredients={this.props.ings}
            cancelOrder={this.cancelOrder}
            proceedWithOrder={this.ProceedWithOrder}
            price={this.props.price}
        />
        }
        
        if(this.state.loading){
            orderSUmmary = <Spinner />
        }

        return (
            <Auxilliary>
                <Modal show={this.state.showSummary}
                        clicked={this.cancelOrder}>
                            {orderSUmmary}
                </Modal>
                {burger}
            </Auxilliary>
        )
    }
}

const mapStateToProps = state => {
    return {
        ings : state.ingredients,
        price: state.total
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded : (ingName) => dispatch({
            type: actionTypes.ADD_INGREDIENT,
            ingredientName : ingName
        }),

        onIngredientRemoved : (ingName) => dispatch({
            type: actionTypes.REMOVE_INGREDIENT,
            ingredientName : ingName
        }),
     }
}

export default  connect(mapStateToProps, mapDispatchToProps)(withErrorHandler (BurgerBuilder, axios))
